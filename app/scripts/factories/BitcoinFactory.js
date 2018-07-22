'use strict';

angular.module('bitcoinPriceApp').factory('bitcoinFactory', function($http, SERVER_URL) {

  let _getBitcoinSummary = function() {
    return $http.get(SERVER_URL + '/summary');
  };

  let _getSales = function() {
    return $http.get(SERVER_URL + '/sales');
  };

  let _getPurchases = function() {
    return $http.get(SERVER_URL + '/purchases');
  };

  return {
    getBitcoinSummary: _getBitcoinSummary,
    getSales: _getSales,
    getPurchases: _getPurchases
  };
});
