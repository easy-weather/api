define([
	"app"
], 
function(app){
	var resultsView = Backbone.View.extend({
		el: $('#container'),
		render: function(word, color) {
			$(this.el).html("");
			
			// create tag
			var htag = $("<h1></h1>");
			$(htag).attr("id", "resultsh1");
			
			// add word and color
			$(htag).html(word);
			$(htag).css("color", "#"+color);
			
			// add to el
			$(this.el).append(htag);
		}
	});

	return new resultsView;
});