WEATHER.Collections.Conditions = Backbone.Collection.extend({
	model: WEATHER.Models.Conditions,
	url: "http://54.245.106.49/easy-weather-api/index.php/weather/conditions/",
	
	initialize: function(lat, long) {
		this.url += lat + "/" + long;
	}
});