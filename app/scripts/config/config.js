(function () {
	'use strict';

	var config = /*@ngInject*/ function config($httpProvider, localStorageServiceProvider) {
	
		$httpProvider.interceptors.push('interceptorService');
		localStorageServiceProvider.setPrefix('countryTaskApp');
	};

	angular
		.module('countryTaskApp')
		.config(config);
}());
