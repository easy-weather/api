require([
  "jquery",
  "less",
  "functions"
], function($) {
	$(document).ready(function(){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(positionAcquired);
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