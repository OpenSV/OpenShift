var jplayerApp = angular.module('jplayerApp', []);

jplayerApp.run(function($rootScope) {
  $rootScope.video = 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v';
});

jplayerApp.directive('jplayer', function() {
      return{
		restrict: 'A',
		templateUrl: '/app/partials/jPlayerPartial.html',
	        link: function(scope, element, attrs) {
	        var $control = element,
	              $player = $control.children('div');
 
	        var updatePlayer = function() {
        	    $player.jPlayer({
	              swfPath: 'app/js/Players/jPlayer',
        	      supplied: 'm4v,aac',
	              ready: function () {
        	        $player.jPlayer("setMedia", {
				m4v: 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v',
	                	poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
			  })
        	      }
	          });
        	}
	      	updatePlayer();
		}      
	}
 });
