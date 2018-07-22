'use strict';

/**
 * @ngdoc function
 * @name bitcoinPriceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bitcoinPriceApp
 */
angular.module('bitcoinPriceApp').controller('MainCtrl', function ($scope, bitcoinFactory) {
  bitcoinFactory.getBitcoinSummary().then(function(summary) {
    $scope.data = summary.data;
  });
});
