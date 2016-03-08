(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.terms', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/terms/terms.html',
            controller: 'TermsController as terms',
          }
        }
      });
  }

  /**
   * @name  HomeController
   * @description Controller
   */
  function TermsController($scope) {
   
  }

  angular.module('app.terms', [])
    .config(config)
    .controller('TermsController', TermsController);
})();
