
(function () {
	'use strict';

	var CountryCtrl = /*@ngInject*/ function CountryCtrl(baseService, $controller,localStorageService) {

		var self = this,
    	init = function () {
			self.geoNames = [];
			self.getCountries();
		};

		// Extend this controller from Base Controller
		angular.extend(self, $controller('BaseController', {
			child: self
		}));

		self.getCountries = function () {
			
			if (localStorageService.get('countiesCached')) {
				self.geoNames = localStorageService.get('countiesCached');
				return;
			}

			baseService._getCountries().then(function(response){
				//setting response
				self.geoNames = response.data.geonames;
				localStorageService.set('countiesCached', self.geoNames);
			},function(){
				// ERROR BLOCK
			});
		};


		init();

  };

	angular
		.module('countryTaskApp')
		.controller('CountryCtrl', CountryCtrl);
}());

