'use strict';

/**
 * @ngdoc function
 * @name bitcoinPriceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bitcoinPriceApp
 */
angular.module('bitcoinPriceApp').controller('MainCtrl', function ($scope, bitcoinFactory, summary, purchases, sales) {

  $scope.summary = summary.data;

  let startTime = new Date(1501871369 * 1000);
  let endTime = new Date(1501891200 * 1000);

  let labels = [];

  for(let i = startTime.getHours(); i <= endTime.getHours(); i++) {
    labels.push(i + 'hs');
  }

  let purchasesTemp = [];
  angular.forEach(purchases.data, function(value) {
    purchasesTemp.push({t : value.date, y : value.price});
  });

  let salesTemp = [];
  angular.forEach(sales.data, function(value) {
    salesTemp.push({t : value.date, y : value.price});
  });

  $scope.labels = labels;
  $scope.series = ['Compra', 'Venda'];
  $scope.data = [
    purchasesTemp,
    salesTemp
  ];

});
