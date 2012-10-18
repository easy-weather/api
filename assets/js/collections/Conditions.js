WEATHER.Collections.Conditions = Backbone.Collection.extend({
	model: WEATHER.Models.Conditions,
	url: "http://easy-weather.local/api/index.php/weather/conditions/",
	
	initialize: function(lat, long) {
		this.url += lat + "/" + long;
	}
});