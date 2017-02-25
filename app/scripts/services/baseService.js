'use strict';

angular.module('countryTaskApp')
	.service('baseService', function ($http, $q, APP_USER) {
		var serviceFactory = {};
		
		var _getCountries = function () {
			var deferred = $q.defer();
			var request = {
				method: 'GET',
				url: 'http://api.geonames.org/countryInfoJSON?username='+APP_USER
			};

	    	$http(request).then( function (response) {
	    		deferred.resolve(response);
		  	}, function(err){
		  		deferred.reject(err);
		  	});
			

		  	return deferred.promise;
		};

		var _getCapitalPopulation = function (capitalName, countryCode) {
			var deferred = $q.defer();
			var request = {
				method: 'GET',
				url: 'http://api.geonames.org/searchJSON?q='+capitalName+'&name_equals='+capitalName+'&country='+countryCode+'&isNameRequired=true&username=bilalqureshi'
			};

	    	$http(request).then( function (response) {
	    		deferred.resolve(response);
		  	}, function(err){
		  		deferred.reject(err);
		  	});
			

		  	return deferred.promise;
		};

		var _getNeighbourCountries = function (id) {
			var deferred = $q.defer();
			var request = {
				method: 'GET',
				url: 'http://api.geonames.org/neighboursJSON?geonameId='+id+'&username=bilalqureshi'
			};

	    	$http(request).then( function (response) {
	    		deferred.resolve(response);
		  	}, function(err){
		  		deferred.reject(err);
		  	});
			

		  	return deferred.promise;
		};

		serviceFactory._getCountries = _getCountries;
        serviceFactory._getCapitalPopulation = _getCapitalPopulation;
		serviceFactory._getNeighbourCountries = _getNeighbourCountries;
		
		return serviceFactory;
	});