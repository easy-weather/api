function positionAcquired(position) {
	var lat = position.coords.latitude;
	var long = position.coords.longitude;

	$.getJSON("/api/index.php/weather/data/" + lat + "/" + long, function(data){
		$("#loading").hide();
	
		var current = data.current_observation;
		var forecast = data.forecast.txt_forecast;
		
		console.log(current);
		
		// todays conditions
		
		// observed at
		tag = $("<p></p>").html( "For " + current.display_location.city + ", " + current.display_location.state_name);
		$(tag).attr("id", "location");
		$("#main section").before(tag);
		
		// article
		innerArticle = $("<article></article>").attr("id", "conditionsContainer");
		$(innerArticle).append( $("<h2></h2>").html("Today") );		
		$(innerArticle).append( $("<img />").attr("src", current.icon_url) );
		
		// temps
		tag = $("<h3></h3>").html((parseInt(current.temp_c) + 273.15) + " K");
		$(tag).attr("id", "currentTemp");
		$(innerArticle).append(tag);
		tag = $("<span></span>").html("(" + current.temp_c+"&deg; C" + ")");
		$(innerArticle).append(tag);
		
		// conditions
		innerInnerArticle = $("<article></article>");
		tag = $("<p></p>").html("Conditions");
		$(innerInnerArticle).append(tag);
		tag = $("<p></p>").html(current.weather);
		$(innerInnerArticle).append(tag);
		
		
		if( current.feelslike_c != current.temp_c )
		{
			innerInnerArticle = $("<article></article>");
			tag = $("<p></p>").html("Feels Like");
			$(innerInnerArticle).append(tag);
			tag = $("<p></p>").html(current.feelslike_c);
			$(innerInnerArticle).append(tag);
			$(innerArticle).append(innerInnerArticle);
		}
		
		innerInnerArticle = $("<article></article>");
		tag = $("<p></p>").html("Humidity");
		$(innerInnerArticle).append(tag);
		tag = $("<p></p>").html(current.relative_humidity);
		$(innerInnerArticle).append(tag);
		$(innerArticle).append(innerInnerArticle);
		
		innerInnerArticle = $("<article></article>");
		tag = $("<p></p>").html("UV Index");
		$(innerInnerArticle).append(tag);
		tag = $("<p></p>").html(current.UV);
		$(innerInnerArticle).append(tag);
		$(innerArticle).append(innerInnerArticle);
		
		innerInnerArticle = $("<article></article>");
		tag = $("<p></p>").html("Visibility");
		$(innerInnerArticle).append(tag);
		tag = $("<p></p>").html(current.visibility_km + "km");
		$(innerInnerArticle).append(tag);
		$(innerArticle).append(innerInnerArticle);
		
		if( current.precip_today_metric != 0 )
		{
			innerInnerArticle = $("<article></article>");
			tag = $("<p></p>").html("Precipitation");
			$(innerInnerArticle).append(tag);
			tag = $("<p></p>").html(current.precip_today_metric + "mm");
			$(innerInnerArticle).append(tag);
			$(innerArticle).append(innerInnerArticle);
		}
		
		if( current.windchill_c != "NA" )
		{
			innerInnerArticle = $("<article></article>");
			tag = $("<p></p>").html("Windchill");
			$(innerInnerArticle).append(tag);
			tag = $("<p></p>").html(current.windchill_c);
			$(innerInnerArticle).append(tag + "&deg; C");
			$(innerArticle).append(innerInnerArticle);
		}
		
		/*
		wind_string
		wind_dir
		*/
		
		// add current cunditions to section and observed time
		$(innerArticle).append( $("<p></p>").html(current.observation_time) );
		$("#main section").append(innerArticle);
		
		// forecaset
		tag = $("<header></header>").html($("<h2></h2>").html("Forecast"));
		$("#main section").append(tag);
		
		// days
		var innerArticle = $("<article></article>");
		$(innerArticle).attr("id", "forecastContainer");
		
		$(forecast.forecastday).each(function(key, value){
		
			if( value.title.search("Night") == -1 && key != 0 )
			{
				var container = $("<div></div>");
				$(container).append( $("<p></p>").html(value.title) );
				$(container).append( $("<img />").attr("src", value.icon_url) );
				$(container).append( $("<p></p>").html(value.fcttext_metric) );
				
				
				$(innerArticle).append(container);
			}
		});	
		
		// add to section
		$("#main section").append(innerArticle);
		$("#main section").append( $("<div></div>").css("clear", "both") );
		
	});
}