
(function () {
	'use strict';

	var MainCtrl = /*@ngInject*/ function MainCtrl($controller) {

		var self = this;
    // Extend this controller from Base Controller
		angular.extend(self, $controller('BaseController', {
			child: self
		}));

		


  };

	angular
		.module('countryTaskApp')
		.controller('MainCtrl', MainCtrl);
}());

