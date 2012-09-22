require([
  "jquery",
  "less",
  "functions"
], function($) {
	$(document).ready(function(){
		$("#main").fadeIn(1000);
		
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(positionAcquired, function(){
				$("#loading").hide();
				
				$("#main").append($("<h3></h3>").html("We can't quite find where you are... Perhaps your in space? I don't think the internet works in space..."));
			});
		}
		else
		{
			$("#loading").hide();
			$("#main").append($("<h2></h2>").html("Unfortunitly we can't decide if your device supports geo-location based services. Check back later, we may have a decision for you."));
		}
		
		$("#siteHeader a").click(function(event) {
			$("#versionLog").show();
			
			event.PreventDefault();
		});
		
		$("#versionLog").click(function(){
			$(this).hide();
		});
	});
});