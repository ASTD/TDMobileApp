angular.module('tdmag.services', [])

/**
* A simple example service that returns some data.
*/
.factory('MagService', function($http, $q, $rootScope) {
    return {
        getAll: function() {
          return $http.get('http://66.227.71.151/AppService/WP7.ashx', {cache: true }).then(function(result) {
			   $rootScope.initalized=true;
			  return result.data;
			 
          });
        }
      }
});
