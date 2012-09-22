<?php
	// decode json response and extract forecast
	$data = json_decode($json);
	$forecast = array();
	$conditions = null;
	
	// load current weather data
	$conditions = (object) array(
		"city" => $data->current_observation->display_location->city,
		"state" => $data->current_observation->display_location->state_name,
		"icon" => $data->current_observation->icon,
		"temp" => $data->current_observation->temp_c,
		"feelslike" => $data->current_observation->feelslike_c,
		"relative_humidity" => $data->current_observation->relative_humidity,
		"UV" => $data->current_observation->UV,
		"visibility" => $data->current_observation->visibility_km,
		"precip" => $data->current_observation->precip_today_metric,
		"windchill" => $data->current_observation->windchill_c,
		"time" => $data->current_observation->observation_time
	);
	
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
	
	$output = (object) array(
		"conditions" => $conditions,
		"forecast" => $forecast
	);
	
	// encode data for final output
	echo json_encode($output);
?>