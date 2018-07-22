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
    'ngMaterial',
    'md.data.table',
    'ui.router'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: 'views/main.html',
        resolve: {
          summary: function(bitcoinFactory) {
            return bitcoinFactory.getBitcoinSummary();
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }).constant(
    'SERVER_URL', '/api'
);
