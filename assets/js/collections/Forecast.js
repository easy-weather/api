WEATHER.Collections.Forecast = Backbone.Collection.extend({
	model: WEATHER.Models.Forecast,
	url: "http://54.245.106.49/easy-weather-api/index.php/weather/forecast/",
	
	initialize: function(lat, long) {
		this.url += lat + "/" + long;
	}
});