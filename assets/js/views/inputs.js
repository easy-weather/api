define([
	"app"
],
function(app){
	var inputsView = Backbone.View.extend({
		events: {
			"click input[type=button]": "processData"	
		},
		el: $('#container'),
		initialize: function(){
		},
		render: function() {
			$(this.el).html("");
			
			var wordLabel = $("<label></label>");
			$(wordLabel).html("Word: ");
			$(this.el).append(wordLabel);
			
			var wordInput = $("<input>");
			$(wordInput).attr("name", "wordInput");
			$(this.el).append(wordInput);
			
			var colorLabel = $("<label></label>");
			$(colorLabel).html("Color: ");
			$(this.el).append(colorLabel);
			
			var colorInput = $("<input>");
			$(colorInput).attr("name", "colorInput");
			$(this.el).append(colorInput);
			
			var button = $("<input>");
			$(button).attr("type", "button");
			$(button).attr("value", "Continue");
			$(this.el).append(button);
		},
		processData: function() {
			var word = $('[name= "wordInput"]').val()
			var color = $('[name= "colorInput"]').val()
			
			if( word != "" && color != "")
			{	
				color.replace("#", "");
			
				Backbone.history.navigate("results/"+word+"/"+color, true);
			}
			else
			{
				alert("please fill in all fields");
			}
		}
	});
	
	return new inputsView;
});