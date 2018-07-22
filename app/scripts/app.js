'use strict';

/**
 * @ngdoc overview
 * @name bitcoinPriceApp
 * @description
 * # bitcoinPriceApp
 *
 * Main module of the application.
 */
angular
  .module('bitcoinPriceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).constant(
    'SERVER_URL', '/api'
);
