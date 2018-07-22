'use strict';

angular.module('bitcoinPriceApp').directive('top5', function () {
  return {
    restrict: 'E',
    scope: {
      description: '@',
      quotations: '='
    },
    template: '<div>\n' +
      '  <md-toolbar class="md-table-toolbar md-primary">\n' +
      '    <div class="md-toolbar-tools">\n' +
      '      <span>{{description}}</span>\n' +
      '    </div>\n' +
      '  </md-toolbar>\n' +
      '  <md-table-container>\n' +
      '    <table md-table>\n' +
      '      <thead md-head>\n' +
      '      <tr md-row>\n' +
      '        <th md-column>Data</th>\n' +
      '        <th md-column md-numeric>Preço</th>\n' +
      '        <th md-column md-numeric>Quantidade</th>\n' +
      '        <th md-column md-numeric>Total</th>\n' +
      '      </tr>\n' +
      '      </thead>\n' +
      '      <tbody md-body>\n' +
      '      <tr md-row ng-repeat="quotation in quotations">\n' +
      '        <td md-cell>{{quotation.date * 1000 | date: \'dd/MM/yyyy hh:mm\'}}</td>\n' +
      '        <td md-cell>{{quotation.price | number: 2}}</td>\n' +
      '        <td md-cell>{{quotation.amount | number: 2}}</td>\n' +
      '        <td md-cell>{{quotation.total | number: 2}}</td>\n' +
      '      </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '  </md-table-container>\n' +
      '</div>'
  };
});
