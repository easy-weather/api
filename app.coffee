request = require 'request'
express = require 'express'
http = require 'http'
_ = require 'underscore'
redis = require 'redis-node'
crypto = require 'crypto'

app = express()
client = redis.createClient()

config =
	api: process.env.WU_API

requestType = "conditions"
lat = 0
long = 0
key = ""
callback = ""

sendData = (body, res)->
	res.type('text/json');
	if callback
		res.send callback + "(" + JSON.stringify(body) + ")"
	else
		res.send JSON.stringify(body)

processForecast = (data, res) ->
	body = data.forecast
	forecast = []

	try
		_.each body.txt_forecast.forecastday, (element, i) ->
			isNight = element.title.indexOf "Night", 0

			if isNight == -1
				day =
					day: element.title
					icon: element.icon
					text: element.fcttext_metric
					text_f: element.fcttext

			forecast.push day if isNight == -1
		, this

		forecast.splice 0, 1

		sendData forecast, res
	catch err
		res.end "Oops..."

processConditions = (data, res) ->
	body = data.current_observation

	conditions =
		city: body.display_location.city
		state: body.display_location.state_name
		icon: body.icon
		temp: body.temp_c + 273.15
		temp_c: body.temp_c
		temp_f: body.temp_f
		feelslike: body.feelslike_c
		feelslike_c: body.feelslike_c
		feelslike_f: body.feelslike_f
		humidity: body.relative_humidity
		UV: body.UV
		visibility: body.visibility_km
		visibility_ki: body.visibility_km
		visibility_mi: body.visibility_mi
		precip: body.precip_today_metric
		precip_metric: body.precip_today_metric
		precip_in: body.precip_today_in
		windchill: body.windchill_c
		windchill_c: body.windchill_c
		windchill_f: body.windchill_f
		time: body.observation_time

	sendData conditions, res

###showGet = (err, redisData, res) ->
	if err
		console.log err
		return fallse

	if redisData
		switch requestType
			when 'conditions' then processConditions JSON.parse(redisData), res
			when "forecast" then processForecast JSON.parse(redisData), res
	else
		url = "http://api.wunderground.com/api/APIKEY/TYPE/pws:0/q/LAT,LONG.json"
		url = url.replace "APIKEY", config.api
		url = url.replace "LAT", lat
		url = url.replace "LONG", long
		url = url.replace "TYPE", requestType

		http.get url, (response) ->
			body = ''

			response.on 'data', (chunk) ->
				body += chunk

			response.on 'end', () ->
				client.set key, body
				client.expire key, 360

				switch requestType
					when 'conditions' then processConditions JSON.parse(body), res
					when "forecast" then processForecast JSON.parse(body), res###

getWeather = (res) ->
	###key = requestType + crypto.createHash('sha1').update(lat+long).digest("hex")
	client.get key, (err, redisData) ->
		showGet err, redisData, res###
	url = "http://api.wunderground.com/api/APIKEY/TYPE/pws:0/q/LAT,LONG.json"
	url = url.replace "APIKEY", config.api
	url = url.replace "LAT", lat
	url = url.replace "LONG", long
	url = url.replace "TYPE", @requestType

	#console.log url
	_rt = @requestType

	http.get url, (response) ->
		body = ''

		response.on 'data', (chunk) ->
			body += chunk

		response.on 'end', () ->
			#client.set key, body
			#client.expire key, 360

			#console.log requestType

			switch _rt
				when 'conditions' then processConditions JSON.parse(body), res
				when "forecast" then processForecast JSON.parse(body), res

app.get '/:type/:lat/:long', (req,res) ->
	callback = req.query.callback if req.query.callback

	type = req.params.type
	lat = req.params.lat
	long = req.params.long

	@requestType = type

	switch @requestType
		when 'conditions', 'forecast' then getWeather res
		else res.send "Go away... Go away now!", 404

app.get '*', (req, res) ->
	res.send "Go away... Go away now!", 404

port = process.env.PORT || 5000
app.listen port