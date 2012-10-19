// main application router
window.Router = Backbone.Router.extend({
	// setup routes
	routes: {
		"": "home",
		"conditions": "conditions",
		"forecast": "forecast"
	},

	home: function() {
		// fade in the main container
		$("#main").fadeIn("slow", function() {
			// check if geolocation is avaliable
			if (navigator.geolocation) {
				// acquire location
				navigator.geolocation.getCurrentPosition(function(pos) {
					// create the collection and pass lat / long
					var conditionsColletion = new WEATHER.Collections.Conditions(pos.coords.latitude, pos.coords.longitude);
					// create new view and pass collection
					var conditionsView = new WEATHER.Views.Conditions({model:conditionsColletion});
					// perform a fetch on collection
					conditionsColletion.fetch({
						success: function() {
							// render view and update #main
							conditionsView.render();
							$("#content").html(conditionsView.el);
						}
					});
					
					// create the collection and pass lat / long
					var forecastCollection = new WEATHER.Collections.Forecast(pos.coords.latitude, pos.coords.longitude);
					// create new view and pass collection
					var forecastView = new WEATHER.Views.Forecast({model:forecastCollection});
					// perform a fetch on collection
					forecastCollection.fetch({
						success: function() {
							// render view and update #main
							forecastView.render();
							$("#content").append(forecastView.el);
						}
					});
				}, function(){
					// location not found
					$("#main").html($("<h3></h3>").html("We can't quite find where you are... Perhaps your in space? If you are, whats the weather like?"));
				});
			}
			else
			{
				$("#main").html($("<h3></h3>").html("Unfortunitly we can't decide if your device supports geo-location based services. Check back later, we may have a decision for you."));	
			}
		});

	},
	
	conditions: function() {
		// fade in the main container
		$("#main").fadeIn("slow", function() {
			// check if geolocation is avaliable
			if (navigator.geolocation) {
				// acquire location
				navigator.geolocation.getCurrentPosition(function(pos) {
					// create the collection and pass lat / long
					var conditionsColletion = new WEATHER.Collections.Conditions(pos.coords.latitude, pos.coords.longitude);
					// create new view and pass collection
					var conditionsView = new WEATHER.Views.Conditions({model:conditionsColletion});
					// perform a fetch on collection
					conditionsColletion.fetch({
						success: function() {
							// render view and update #main
							conditionsView.render();
							$("#content").html(conditionsView.el);
						}
					});
				}, function(){
					// location not found
					$("#main").html($("<h3></h3>").html("We can't quite find where you are... Perhaps your in space? If you are, whats the weather like?"));
				});
			}
			else
			{
				$("#main").html($("<h3></h3>").html("Unfortunitly we can't decide if your device supports geo-location based services. Check back later, we may have a decision for you."));	
			}
		});
	},

	forecast: function() {
		// fade in the main container
		$("#main").fadeIn("slow", function() {
			// check if geolocation is avaliable
			if (navigator.geolocation) {
				// acquire location
				navigator.geolocation.getCurrentPosition(function(pos) {
					// create the collection and pass lat / long
					var forecastCollection = new WEATHER.Collections.Forecast(pos.coords.latitude, pos.coords.longitude);
					// create new view and pass collection
					var forecastView = new WEATHER.Views.Forecast({model:forecastCollection});
					// perform a fetch on collection
					forecastCollection.fetch({
						success: function() {
							// render view and update #main
							forecastView.render();
							$("#content").html(forecastView.el);
						}
					});
				}, function(){
					// location not found
					$("#main").html($("<h3></h3>").html("We can't quite find where you are... Perhaps your in space? If you are, whats the weather like?"));
				});
			}
			else
			{
				$("#main").html($("<h3></h3>").html("Unfortunitly we can't decide if your device supports geo-location based services. Check back later, we may have a decision for you."));	
			}
		});
	},

	initialize: function () {
		// render loading template
		var loadingView = new WEATHER.Views.Loading();
		loadingView.render();
		
		$("#content").html(loadingView.el);
	}
});