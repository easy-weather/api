[![GitHub tag](https://img.shields.io/github/tag/easy-weather/api.svg)](https://github.com/easy-weather/api/tags)
[![GitHub issues](https://img.shields.io/github/issues/easy-weather/api.svg)](https://github.com/easy-weather/api/issues)
[![Coverage Status](https://coveralls.io/repos/easy-weather/api/badge.svg)](https://coveralls.io/r/easy-weather/api)
[![Codacy Badge](https://www.codacy.com/project/badge/459d2c5aae044408ba2cbe799ae6b216)](https://www.codacy.com/app/jeffhann/easy-weather-api)
[![Build Status](https://travis-ci.org/easy-weather/api.svg?branch=master)](https://travis-ci.org/easy-weather/api)
[![Dependency Status](https://david-dm.org/easy-weather/api.svg)](https://david-dm.org/easy-weather/api)
[![GitHub license](https://img.shields.io/github/license/easy-weather/api.svg)]()

#Easy Weather API
> The Easy Weather (http://weather.keepiteasy.net/) API powers our weather service that inclides a website, a Chrome application, and an Android app.

##Setup
Run 'npm install' to get all the necessary Node Modules installed, and then sign up with Weather Underground for an API key and create a .env file like below

		WU_API=KEYGOESHERE

##API
Full API documentation is avaliable at [weather.keepiteasy.net/api](http://weather.keepiteasy.net/apo/). [Apiary](https://apiary.io/) is coming soon.

###Conditions [/conditions/{lat}/{long}]

+ Parameters 
    + lat: `44.7323294` (string), required  - lattitude
    + long: `-63.65548210000001` (string), required  - longitude

####Current Conditions [GET]

+ Response 200
    + Body
    
            {
                "city": "Bedford",
                "state": "Nova Scotia",
                "icon": "cloudy",
                "temp": 290.15,
                "temp_c": "17",
                "temp_f": "63",
                "feelslike": "17",
                "feelslike_c": "17",
                "feelslike_f": "63",
                "humidity": "94%",
                "UV": "2",
                "visibility": "24.1",
                "visibility_ki": "24.1",
                "visibility_mi": "15.0",
                "precip": "0.0",
                "precip_metric": "0.0",
                "precip_in": "0.00",
                "windchill": "NA",
                "windchill_c": "NA",
                "windchill_f": "NA",
                "time": "LastUpdatedonJune24 10: 00AMADT"
            }
        
###Forecast [/forecast/{lat}/{long}]

+ Parameters 
    + lat: `44.7323294` (string), required  - lattitude
    + long: `-63.65548210000001` (string), required  - longitude

####Future Forecast [GET]

+ Response 200
    + Body
    
            [
                {
                    "day": "Thursday",
                    "icon": "clear",
                    "text": "Generally sunny. High 23C. Winds WNW at 15 to 30 km/h.",
                    "text_f": "Plentiful sunshine. High 73F. Winds WNW at 10 to 20 mph."
                },
                {
                    "day": "Friday",
                    "icon": "clear",
                    "text": "Generally sunny. High 23C. Winds WNW at 15 to 30 km/h.",
                    "text_f": "Plentiful sunshine. High 73F. Winds WNW at 10 to 20 mph."
                },
                {
                    "day": "Saturday",
                    "icon": "clear",
                    "text": "Generally sunny. High 23C. Winds WNW at 15 to 30 km/h.",
                    "text_f": "Plentiful sunshine. High 73F. Winds WNW at 10 to 20 mph."
                }
            ]

##License
This tool is protected by the [GNU General Public License v2](http://www.gnu.org/licenses/gpl-2.0.html).

Copyright [Jeffrey Hann](http://jeffreyhann.ca/) 2013
