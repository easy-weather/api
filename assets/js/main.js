require([
  "jquery",
  "less",
  "modernizr",
  "functions"
], function($) {
	$(document).ready(function(){
	
		// fake a position object incase location cannot be acquired
		var defaultPosition = {
			coords : {
				latitude : 44.6472763,
				longitude : -63.57450179999999
			},
			default : true
		};
	
		// check if client supports geolocation
		if(Modernizr.geolocation)
		{
			navigator.geolocation.getCurrentPosition(positionAcquired, function(e) {
				if (e.code = e.PERMISSION_DENIED)
				{
					console.log("geolocation permission denied, using default object");
					positionAcquired(defaultPosition);
				}
			});
		}
		else
		{
			console.log("geolocation not supported, using default object");
			positionAcquired(defaultPosition);
		}
		
		// listener for site header
		$("#siteHeader a").unbind().click(function(e) {
			$("#versionLog").show();
			e.PreventDefault();
		});
		
		$("#versionLog").unbind().click(function(){
			$(this).hide();
		});
	});
});