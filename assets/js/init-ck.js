// namespaces
WEATHER={Views:{Sections:{},Modals:{}},Collections:{},Models:{},Data:{},Utils:{},Templates:{}};var templates=["Loading","Conditions","Forecast","ForecastDay"];_.each(templates,function(e){$.ajax({url:"assets/tpl/"+e+".html",async:!1,dataType:"text",success:function(t){WEATHER.Templates[e]=t}})});Backbone.View.prototype._super=function(e){return this.constructor.__super__[e].apply(this,_.rest(arguments))};