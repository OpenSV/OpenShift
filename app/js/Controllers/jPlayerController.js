/* Controller for video.js */
var jPlayerModule = angular.module('jPlayerModule', ['angular.css.injector']);

jPlayerModule.controller('jPlayerCssInjectorCtrl', function($scope, cssInjector){
		cssInjector.add("/app/js/Players/jPlayer/skin/blue.monday/jplayer.blue.monday.css");
});

