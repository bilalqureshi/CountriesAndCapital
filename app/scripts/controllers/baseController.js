(function () {
	'use strict';

	var BaseController = /*@ngInject*/ function BaseController($state) {

		var self = this;

		// change states from here
		self.goTo = function (view, countryObj) {
			if (countryObj) {
				$state.go(view, {country: countryObj});
			} else {
				$state.go(view);
			}
		};


    };

	angular
		.module('countryTaskApp')
		.controller('BaseController', BaseController);
}());

