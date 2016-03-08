(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.email', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/email/email.html',
            controller: 'EmailController as email',
          }
        }
      });
  }

  /**
   * @name  HomeController
   * @description Controller
   */
  function EmailController($scope, $state) {
    
   $scope.email = {
     email: ''
   }

   $scope.prompt = '';

   // $('.checkbox').checkbox();

   $scope.send = function()
   {
      console.log('here')
      console.log( $scope.email.email);
      // $state.go('thanks')
   }
   
  }

  angular.module('app.email', [])
    .config(config)
    .controller('EmailController', EmailController);
})();
