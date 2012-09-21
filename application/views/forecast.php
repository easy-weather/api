<?php
	// set api url and key
	$url = 'http://api.wunderground.com/api/API_KEY/conditions/forecast/alert/q/LAT,LONG.json';
	$key = 'f30ae1d34ad67d49';
	
	// build url and load response
	$source = str_replace("API_KEY", $key, $url);
	$source = str_replace("LAT", $lat, $source);
	$source = str_replace("LONG", $long, $source);
	$response = file_get_contents($source);
	
	// decode json response and extract forecast
	$data = json_decode($response);
	$forecast = array();
	
	// loop through the existing forecast data and build new objects
	foreach($data->forecast->txt_forecast->forecastday as $forecastday)
	{
		// filter out only daytime forecasts
		if(strpos($forecastday->title, "Night") == 0)
		{
			$forecast[] = (object) array(
				"text" => $forecastday->fcttext_metric, 
				"day" => $forecastday->title, 
				"icon" => $forecastday->icon,
				"pop" =>  $forecastday->pop
			);
		}
	}
	
	// encode data for final output
	echo json_encode($forecast);
?>