'use strict';

angular.module('bitcoinPriceApp').factory('bitcoinFactory', function($http, SERVER_URL) {

  let _getBitcoinSummary = function() {
    return $http.get(SERVER_URL + '/summary');
  };

  return {
    getBitcoinSummary: _getBitcoinSummary
  };
});
