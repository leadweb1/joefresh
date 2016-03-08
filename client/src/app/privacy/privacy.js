(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.privacy', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/privacy/privacy.html',
            controller: 'PrivacyController as privacy',
          }
        }
      });
  }

  /**
   * @name  HomeController
   * @description Controller
   */
  function PrivacyController($scope) {
   
  }

  angular.module('app.privacy', [])
    .config(config)
    .controller('PrivacyController', PrivacyController);
})();
