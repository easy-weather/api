WEATHER.Views.Conditions = Backbone.View.extend({
	id: "conditions",
	
	initialize: function(){
		this.el = $(this.el);
		this.template = _.template(WEATHER.Templates.Conditions);
	},
	
	render: function() {
		var conditions = this.model.models[0].toJSON();
		$(this.el).html(this.template(conditions));

        return this;
	}
});