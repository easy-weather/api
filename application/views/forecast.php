<?php
	// set header data
	$this->output->set_content_type('application/json');
	$this->output->set_header('Access-Control-Allow-Origin: *');

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
	$forecast = $data->forecast;
	
	// encode data for final output
	$output = json_encode($forecast);
	$this->output->append_output($output);
?>