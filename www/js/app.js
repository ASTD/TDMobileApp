

angular.module('tdmag', ['ionic', 'tdmag.services', 'tdmag.controllers', 'tdmag.directives'])
	
	.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the pet tab has its own child nav-view and history
    .state('tab.news-index', {
      url: '/news',
      views: {
        'news-tab': {
          templateUrl: 'templates/news-index.html',
          controller: 'NewsController'
        }
      }
    })
	
	

    .state('tab.news-detail', {
      url: '/news/:articleId',
      views: {
        'news-tab': {
          templateUrl: 'templates/news-detail.html',
          controller: 'NewsDetailController'
        }
      }
    })


    .state('tab.magazine-index', {
      url: '/magazine',
      views: {
        'magazine-tab': {
          templateUrl: 'templates/magazine-index.html',
          controller: 'MagazineController'
        }
      }
    })
	
    .state('tab.magazine-detail', {
      url: '/magazine/:articleId',
      views: {
        'magazine-tab': {
          templateUrl: 'templates/magazine-detail.html',
          controller: 'MagazineDetailController'
        }
      }
    })
	
    .state('tab.podcast-index', {
      url: '/podcast',
      views: {
        'podcast-tab': {
          templateUrl: 'templates/podcast-index.html',
		  controller: 'PodcastController'
        }
      }
    })

    .state('tab.podcast-detail', {
      url: '/podcast/:articleId',
      views: {
        'podcast-tab': {
          templateUrl: 'templates/podcast-detail.html',
		  controller: 'PodcastDetailController'
        }
      }
    })
	
    .state('tab.twitter-index', {
      url: '/twitter',
      views: {
        'twitter-tab': {
          templateUrl: 'templates/twitter-index.html',
		  controller: 'TwitterController'
        }
      }
    })
	
	
    .state('tab.twitter-detail', {
      url: '/twitter/:id',
      views: {
        'twitter-tab': {
          templateUrl: 'templates/twitter-detail.html'
        }
      }
    })
	
	;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/news');

});

