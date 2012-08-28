<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class weather_model extends CI_Model {
	private $url = 'http://api.wunderground.com/api/API_KEY/conditions/forecast/alert/q/LAT,LONG.json';
	private $key = 'f30ae1d34ad67d49';
	private $lat;
	private $long;
	
	function __construct()
	{
		parent::__construct();
	}
	
	function load_weather($lat, $long)
	{
		$feed = str_replace("API_KEY", $this->key, $this->url);
		$feed = str_replace("LAT", $lat, $feed);
		$feed = str_replace("LONG", $long, $feed);
		
		$xml = file_get_contents($feed);
				
		return $xml;
	}
	
	function load_current_conditions($lat, $long)
	{
		$rss = $this->load_weather($lat, $long);
		
		return $rss;
	}
}
?>