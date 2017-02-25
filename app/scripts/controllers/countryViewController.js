
(function () {
	'use strict';

	var CountryViewCtrl = /*@ngInject*/ function CountryViewCtrl($stateParams,$state, $controller, baseService, localStorageService) {

    var self = this,
		init = function () {
			if (!$stateParams.country) {
				$state.go('countries');
			}
 			self.countryClicked = $stateParams.country;// get the country from URL params
			self.getCapitalPopulation();
			self.populationofCapital = [];
			self.getNeighbourCountires();
		};

		// Extend this controller from Base Controller
		angular.extend(self, $controller('BaseController', {
			child: self
		}));

		self.getCapitalPopulation = function () {
			baseService._getCapitalPopulation(self.countryClicked.capital, self.countryClicked.countryCode).then(function(response){
				//setting response
				self.populationofCapital = response.data.geonames;
				self.capitalPopulation = self.getTotalPopulaton();
				
			},function(){
				// ERROR BLOCK
			});
		
		};

		// get total population 
		self.getTotalPopulaton = function () {
			var populationArray = self.populationofCapital.map(function(a) {return a.population;});
			var sumOfPopulation = populationArray.reduce((a, b) => a + b, 0);
			return sumOfPopulation;
		};

		// get neighbour countries
		self.getNeighbourCountires = function () {
			baseService._getNeighbourCountries(self.countryClicked.geonameId).then(function(response){
				//setting response
				self.neighbourCountries = response.data.geonames;
				
			},function(){
				// ERROR BLOCK
			});
		};

		// getting to neighbour country self
		self.neighbouringCountryCliked = function (nCountry) {
			if (localStorageService.get('countiesCached')) {
				var getCachedCountries = localStorageService.get('countiesCached');
				var getNeighbourIndex = getCachedCountries.map(function(x) {return x.geonameId; }).indexOf(nCountry.geonameId);
				
				$state.go('countryview', {country: getCachedCountries[getNeighbourIndex]});
			} else {
				$state.go('countries');
			}

		};
	

		init();

  };

	angular
		.module('countryTaskApp')
		.controller('CountryViewCtrl', CountryViewCtrl);
}());

