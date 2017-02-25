(function () {
	'use strict';

	var routes = /*@ngInject*/ function routes($stateProvider, $urlRouterProvider) {
		var states = [];

		states.push({
			name: 'home',
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl as mc'
		});
        states.push({
			name: 'countries',
			url: '/countries',
			templateUrl: 'views/country.html',
			controller: 'CountryCtrl as cc'
		});
        states.push({
			name: 'countryview',
			url: '/countryView/:countryCode',
			templateUrl: 'views/countryView.html',
			controller: 'CountryViewCtrl as cvc',
			params: {
				country: null
			}
		});

		
		states.forEach(function (_state) {
			$stateProvider.state(_state);
		});

		$urlRouterProvider.otherwise('/');
	};

	angular
		.module('countryTaskApp')
		.config(routes);
}());
