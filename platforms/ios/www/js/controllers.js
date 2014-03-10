angular.module('tdmag.controllers', ['ionic', 'tdmag.services','ngSanitize'])

.controller('NewsController', function($rootScope,$scope, MagService,$ionicLoading) {	
 
	if (!$rootScope.initalized) {
    	$scope.loading = $ionicLoading.show({
      	  content: 'Loading',
      	  showDelay: 500
    	});
	}
	
    $scope.hide = function(){
		if ($scope.loading) {
        	$scope.loading.hide();
	    }
     };
	 
  MagService.getAll().then(function(data) {
        $scope.news = data.News.Feeds;
        //console.log(data);
		$scope.hide();
    }, function(result) {});
})
.controller('MagazineController', function($scope, MagService) {
  MagService.getAll().then(function(data) {
        $scope.mags = data.Magazine.Feeds;
        console.log(data);
    }, function(result) {});
})
.controller('PodcastController', function($scope, $rootScope, $stateParams, MagService) {
    MagService.getAll().then(function(data) {
          $scope.podcasts = data.Podcasts.Podcasts;
          console.log(data);
      }, function(result) {});
})
.controller('NewsDetailController', function($scope, $stateParams, MagService) {  
    MagService.getAll().then(function(data) {
          $scope.article = data.News.Feeds[$stateParams.articleId];
		  $scope.title = $scope.article.t;
		  console.log($scope.article);
      }, function(result) {});
})

.controller('MagazineDetailController', function($scope, $stateParams, MagService) {
    MagService.getAll().then(function(data) {
          $scope.article = data.Magazine.Feeds[$stateParams.articleId];
		  $scope.title = $scope.article.t;
		  console.log($scope.article);
      }, function(result) {});
})

.controller('PodcastDetailController', function($scope, $rootScope, $stateParams, $ionicLoading, MagService, $sce) {
	
    $scope.trustSrc = function(src) {
       return $sce.trustAsResourceUrl(src);
     }
	
	$rootScope.$on('$locationChangeStart', function (event, next, current) {
         $scope.my_media.release();	   
	});
	
    MagService.getAll().then(function(data) {
          $scope.article = data.Podcasts.Podcasts[$stateParams.articleId];
		  $scope.title = $scope.article.t;
		  $scope.my_media = new Media($scope.article.url);
		  console.log($scope.article);
      }, function(result) {});
})

.controller('TwitterController', function($scope, $stateParams, MagService) {
  MagService.getAll().then(function(data) {
        $scope.tweets = data.Tweets.Tweets;
        console.log(data);
    }, function(result) {});
})
