(function () {
	'use strict';

	/* NOTE: working on localhost is not set as ENV,
	 * be careful if you need to modify the script above avoid submitting those changes.
	 */
	var setEnv = function setEnv() {
		var hostname = location.hostname;
		var coincidences = hostname.match(new RegExp('-(stage|dev|test)', 'ig'));
		var env = (coincidences && coincidences.length) && coincidences[0].split('-')[1];

		// If running localhost, then it's a dev enviroment
		if (hostname === 'localhost') {
			env = 'dev';
		}

		return {
			IS_PROD: !env,
			IS_DEV: env === 'dev',
			IS_STAGE: env === 'stage',
			IS_TEST: env === 'test'
		};
	};

	angular
		.module('countryTaskApp')
		.constant('APP_VERSION', '1.1.0')
		.constant('APP_USER', 'bilalqureshi')
		.constant('ENV', setEnv()); // Way to access this -> ENV.IS_PROD
}());
