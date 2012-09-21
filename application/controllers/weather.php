<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Weather extends CI_Controller 
{
	public function __construct()
	{
		parent::__construct();
		
		// enable caching for 12 hours
		//$this->output->cache(720);
		
		// set header data
		$this->output->set_content_type('application/json');
		$this->output->set_header('Access-Control-Allow-Origin: *');
		
		// load session library
		$this->load->library('session');
	}
	
	public function _output($output)
	{
		// if cache is enabled log file
		if ($this->output->cache_expiration > 0)
		{
			$this->output->_write_cache($output);
		}

		// finally print to screen
		echo $output;
	}
	
	public function session()
	{
		$this->output->set_output(json_encode($this->session->all_userdata()));
	}

	public function index()
	{
		$this->output->set_output("{'response' : 'good'}");
	}
	
	public function forecast($lat = null, $long = null)
	{
		// check if lat and long are set
		if( $lat != null && $long != null)
		{
			// create data object
			$data = array(
				"lat" => $lat,
				"long" => $long,
				"response" => "json"
			);
			
			$content = $this->load->view('forecast', $data, true);
			$this->output->append_output($content);
		}
		else
		{
			// ToDo: create view for errors
			$this->output->set_output("Lat and Long must be provided.");
		}
	}
}