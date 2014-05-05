'use strict';

/* App Module */

var OpenSVApp = angular.module('OpenSVApp', [
  'ngRoute'
]);

OpenSVApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/samples/jPlayer', {
        templateUrl: 'partials/jPlayer.html'
/*        controller: 'PhoneListCtrl'*/
      }).
      when('/samples/popcornjs', {
        templateUrl: 'partials/popcornjs.html'
/*        controller: 'PhoneDetailCtrl'*/
      }).
      when('/samples/videojs',{
	      templateUrl: 'partials/videojs.html'
      }).
      otherwise({
		templateUrl: 'partials/helloworld.html'
      });
  }]);
