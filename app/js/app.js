'use strict';

/* App Module */

var OpenSVApp = angular.module('OpenSVApp',['ngRoute']);

OpenSVApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/',{templateUrl: '/app/partials/helloworld.html'})
	.when('/samples/jPlayer',{templateUrl: '/app/partials/jPlayer.html'})
	.when('/samples/videojs',{templateUrl: '/app/partials/videojs.html'})
	.when('/login',{templateUrl: '/app/partials/login.html',controller: 'loginCtrl'})
	.when('/test',{templateUrl: '/app/partials/test.html'})
	.otherwise({redirectTo: '/'});

	if(window.history && window.history.pushState){
	    $locationProvider.html5Mode(true);
	}
});
