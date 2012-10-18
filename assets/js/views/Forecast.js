WEATHER.Views.Forecast = Backbone.View.extend({
	id: "forecast",
	
	initialize: function() {
		this.el = $(this.el);
		this.template = _.template(WEATHER.Templates.Forecast);
	},
	
	render: function() {
		var forecast = this.model.toJSON();
		
		$(this.el).html(this.template);
		
		_.each(forecast, function(day) {
			this.el.find("#forecastContainer").append(_.template(WEATHER.Templates.ForecastDay, day));
		}, this);

        return this;
	}
});