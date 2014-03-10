var App = angular.module('tdmag.directives', ['ionic']);
 
App.directive('twitterfeed', function() {
	return {
		restrict: 'A',
		// responsible for registering DOM listeners as well as updating the DOM
		link: function(scope, element, attrs) {
		
			$(element).click(function(){
				var ref = window.open(attrs.tweetlink, '_blank', {location: 'no', toolbarposition: 'top', presentationstyle: 'pagesheet'});

				ref.addEventListener('loadstart', function(event) {
				
				});
				ref.addEventListener('loadstop', function(event) {
			    
				});
				ref.addEventListener('exit', function(event) {
				
				});
			});
		}
	}});

 
	App.directive('player', function() {
		return {
			restrict: 'A',
			// responsible for registering DOM listeners as well as updating the DOM
			link: function(scope, element, attrs) {
						
		        scope.isplaying = false;
				//scope.setMedia("GluGlu");				
				$(element).click(function(){
					if (scope.isplaying && scope.my_media != null) {
						scope.my_media.pause();
						scope.isplaying = false;
						$("#playAction").html('Play');
						return;
					};
			   
					$("#playAction").html('Loading...');    
										  
					setTimeout(function() {
								scope.my_media.play();
								$("#playAction").html('Pause');	   
								scope.isplaying = true;
							}, 400);
					});
				}
			}});

