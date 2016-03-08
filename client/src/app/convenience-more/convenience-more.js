(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.convenience-more', {
        url: '/convenience-more',
        views: {
          '@': {
            templateUrl: 'src/app/thanks/thanks.html',
            controller: 'ThanksController as thanks',
          }
        }
      });
  }

  function ThanksController($scope, $state) {
    
    
       
  }



  angular.module('app.convenienceAndMore', [])
    .config(config)
    .controller('ThanksController', ThanksController)
    ;
})();
