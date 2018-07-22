'use strict';

/**
 * @ngdoc function
 * @name bitcoinPriceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bitcoinPriceApp
 */
angular.module('bitcoinPriceApp').controller('MainCtrl', function ($scope, bitcoinFactory, summary) {

  $scope.summary = summary.data;


  $scope.query = {
    order: 'name',
    limit: 5,
    page: 1
  };
});
