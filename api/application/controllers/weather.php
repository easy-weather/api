<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Weather extends CI_Controller {

	public function index()
	{
		echo '{"response" : "good"}';
	}
	
	public function data($lat, $long)
	{
		$this->load->model('weather_model');
		$data['conditions'] = $this->weather_model->load_current_conditions($lat, $long);
		echo $data['conditions'];
	}
}