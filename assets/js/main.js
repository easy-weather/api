// main
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
//
function onDeviceReady() {
    navigator.notification.alert("hi", function(){})
}

$(function() {
	app = new Router();
	Backbone.history.start();
});