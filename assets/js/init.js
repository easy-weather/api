// namespaces
WEATHER = {
	Views: {
		Sections: {},
		Modals: {}
	},
	Collections: {},
	Models: {},
	Data: {},
	Utils: {},
	Templates: {}
};

// declare templates to load from tpl directory
var templates = [
	'Loading',
	'Conditions',
	'Forecast',
	'ForecastDay'
];

// utility to map html templates to vars in the Templates namespace
_.each(templates, function(template) {
	$.ajax({
		url: 'assets/tpl/' + template + '.html',
		async: false,
		dataType: 'text',
		success: function(data) {
			WEATHER.Templates[template] = data;
		}
	});
});

Backbone.View.prototype._super = function(funcName){
	return this.constructor.__super__[funcName].apply(this, _.rest(arguments));
};