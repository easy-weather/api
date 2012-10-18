<?php
	// decode json response and extract forecast
	$data = json_decode($json);
	$forecast = array();
	
	// load current weather data
	$conditions = (object) array(
		"city" => $data->current_observation->display_location->city,
		"state" => $data->current_observation->display_location->state_name,
		"icon" => $data->current_observation->icon,
		"temp" => $data->current_observation->temp_c,
		"feelslike" => $data->current_observation->feelslike_c,
		"humidity" => $data->current_observation->relative_humidity,
		"UV" => $data->current_observation->UV,
		"visibility" => $data->current_observation->visibility_km,
		"precip" => $data->current_observation->precip_today_metric,
		"windchill" => $data->current_observation->windchill_c,
		"time" => $data->current_observation->observation_time
	);
	
	$json = json_encode($conditions);
	echo isset($_GET['callback']) ? "{$_GET['callback']}($json)" : $json;
?>