WEATHER.Views.Loading = Backbone.View.extend({
	id: "loading",
	
	initialize: function(){
		this.el = $(this.el);
		this.template = _.template(WEATHER.Templates.Loading);
	},
	
	render: function() {
		$(this.el).html(this.template);
		
		return this;
	}
});