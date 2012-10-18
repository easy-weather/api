WEATHER.Collections.Forecast = Backbone.Collection.extend({
	model: WEATHER.Models.Forecast,
	url: "http://easy-weather.local/api/index.php/weather/forecast/",
	
	initialize: function(lat, long) {
		this.url += lat + "/" + long;
	}
});