(function () {

    'use strict';
    var interceptorService = function interceptorService ($q) {
        
        var authInterceptorServiceFactory  = {};

        // intercepting every call  in this 
        var _request = function (config) {
          
            //config.headers = APP_USER;
            //config.headers.Accept = configurations.acceptType;

            return config;
        };
    
        var _responseError = function (rejection) {
            return $q.reject(rejection);
        };
        
        authInterceptorServiceFactory.request = _request;
        authInterceptorServiceFactory.responseError = _responseError;
    
        return authInterceptorServiceFactory;
    };


     angular
        .module('countryTaskApp')
        .service('interceptorService', interceptorService);

})();