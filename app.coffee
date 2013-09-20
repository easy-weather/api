url = require 'url'
request = require 'request'
express = require 'express'
http = require 'http'
_ = require 'underscore'
app = express()

callback = ""
config =
	api: process.env.WU_API

sendData = (body, res)->
	res.type('text/json');
	output = body

	if @callback != ""
		output = @callback + "(" + body + ")"

	res.end output

processForecast = (data, res) ->
	body = data.forecast
	forecast = []

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

	sendData JSON.stringify(data), res

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

	sendData JSON.stringify(conditions), res

getWeather = (type, lat, long, res) ->
	host = "http://api.wunderground.com/api/APIKEY/TYPE/pws:0/q/LAT,LONG.json"
	host = host.replace "APIKEY", config.api
	host = host.replace "LAT", lat
	host = host.replace "LONG", long
	host = host.replace "TYPE", type

	http.get host, (response) ->
		body = ''

		response.on 'data', (chunk) ->
			body += chunk

		response.on 'end', () ->
			switch type
				when 'conditions' then processConditions JSON.parse(body), res
				when "forecast" then processForecast JSON.parse(body), res

app.get '/:type/:lat/:long', (req,res) ->
	url_parts = url.parse req.url, true
	@callback = url_parts.query.callback

	type = req.params.type
	lat = req.params.lat
	long = req.params.long

	console.log type + " request from LAT: " + lat + " LONG: " + long

	switch type
		when 'conditions', 'forecast' then getWeather type, lat, long, res
		else res.send "Go away... Go away now!", 404

app.get '*', (req, res) ->
	res.send "Go away... Go away now!", 404

port = process.env.PORT || 5000
app.listen port
console.log "listening on port " + port