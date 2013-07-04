Easy-Weather-API-V.2
====================

Easy Weather (http://weather.keepiteasy.net/) is my pet project, and currently consists of an HTML5 Web App built in Backbone powered by an outdated PHP Rest service and Weather Underground. This specifically is a complete re-write using Node JS.

Run 'npm install' to get all the necessary Node Modules installed, and then sign up with Weather Underground for an API key and create a .env file like below

		WU_API=KEYGOESHERE

Once that is setup you can run it like any other Node app and visit http://localhost:5000/forecast/44.7315035/-63.659654 or http://localhost:5000/conditions/44.7315035/-63.659654 to test.