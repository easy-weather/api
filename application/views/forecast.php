<?php
	// decode json response and extract forecast
	$data = json_decode($json);
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
				"icon" => $forecastday->icon
			);
		}
	}
	
	// encode data for final output
	echo json_encode($forecast);
?>