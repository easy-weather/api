[![GitHub tag](https://img.shields.io/github/tag/easy-weather/api.svg)](https://github.com/easy-weather/api/tags)
[![GitHub issues](https://img.shields.io/github/issues/easy-weather/api.svg)](https://github.com/easy-weather/api/issues)
[![Coverage Status](https://coveralls.io/repos/easy-weather/api/badge.svg)](https://coveralls.io/r/easy-weather/api)
[![Codacy Badge](https://www.codacy.com/project/badge/459d2c5aae044408ba2cbe799ae6b216)](https://www.codacy.com/app/jeffhann/easy-weather-api)
[![Build Status](https://travis-ci.org/easy-weather/api.svg?branch=master)](https://travis-ci.org/easy-weather/api)
[![Dependency Status](https://david-dm.org/easy-weather/api.svg)](https://david-dm.org/easy-weather/api)
[![GitHub license](https://img.shields.io/github/license/easy-weather/api.svg)]()

Easy Weather API V2
====================

Easy Weather (http://weather.keepiteasy.net/) is my pet project, and currently consists of an HTML5 Web App built in Backbone powered by an outdated PHP Rest service and Weather Underground. This specifically is a complete re-write using Node JS.

Run 'npm install' to get all the necessary Node Modules installed, and then sign up with Weather Underground for an API key and create a .env file like below

		WU_API=KEYGOESHERE

Once that is setup you can run it like any other Node app and visit http://localhost:5000/forecast/44.7315035/-63.659654/ or http://localhost:5000/conditions/44.7315035/-63.659654/ to test.

##License
This tool is protected by the [GNU General Public License v2](http://www.gnu.org/licenses/gpl-2.0.html).

Copyright [Jeffrey Hann](http://jeffreyhann.ca/) 2013
