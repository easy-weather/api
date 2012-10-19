WEATHER.Collections.Conditions = Backbone.Collection.extend({
	StorageName: "Conditions",
	model: WEATHER.Models.Conditions,
	url: "http://54.245.106.49/easy-weather-api/index.php/weather/conditions/",
	
	initialize: function(lat, long) {
		this.url += lat + "/" + long;
	},
	
	parse: function(response) {
		if (Modernizr.localstorage) 
		{
			var updateStorage = true;
			var storageResponse = localStorage.getItem(this.StorageName);
			var storageResponseTime = localStorage.getItem(this.StorageName+"Time");
			
			if(storageResponse && storageResponseTime)
			{
				var timeDifference = new Date().getTime() - storageResponseTime;
				
				if( timeDifference < 3600000 )
				{
					updateStorage = false;
				}
			}
			
			if( updateStorage )
			{
				localStorage.setItem(this.StorageName, JSON.stringify(response));
				localStorage.setItem(this.StorageName+"Time", new Date().getTime());
			}
		}
		
		return response;
	},

	sync: function(method, model, options) {
		var forceServer = true;
		options.dataType = "jsonp";
		
		switch (method) 
		{
			case "create":
				return Backbone.sync(method, model, options);
				break;
			case "update":
				return Backbone.sync(method, model, options);
				break;
			case "delete":
				return Backbone.sync(method, model, options);
				break;
		}

		if (Modernizr.localstorage)
		{
			var storageResponse = localStorage.getItem(this.StorageName);
			var storageResponseTime = localStorage.getItem(this.StorageName+"Time");
			
			if(storageResponse && storageResponseTime)
			{
				var timeDifference = new Date().getTime() - storageResponseTime;
				
				if( timeDifference < 3600000 )
				{
					forceServer = false;
					options.success(JSON.parse(storageResponse));
				}
			}
		}
		
		if (forceServer)
		{
			return Backbone.sync(method, model, options);
		}
	}
});