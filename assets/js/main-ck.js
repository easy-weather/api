require(["jquery","less","functions-ck"],function(e){e(document).ready(function(){e("#main").fadeIn(1e3);if(navigator.geolocation)navigator.geolocation.getCurrentPosition(positionAcquired,function(){e("#loading").hide();e("#main").append(e("<h3></h3>").html("We can't quite find where you are... Perhaps your in space? I don't think the internet works in space..."))});else{e("#loading").hide();e("#main").append(e("<h2></h2>").html("Unfortunitly we can't decide if your device supports geo-location based services. Check back later, we may have a decision for you."))}e("#siteHeader a").click(function(t){e("#versionLog").show();t.PreventDefault()});e("#versionLog").click(function(){e(this).hide()})})});