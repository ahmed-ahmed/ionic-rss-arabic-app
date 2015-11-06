angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('newsService', [function($q){
	service.getAccounts = function(){
		var deferred = $q.defer();
        deferred.resolve({data: accounts});
        return deferred.promise;
    };
	

}]);

