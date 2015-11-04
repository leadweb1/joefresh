(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.intuitive-experience', {
        url: '/intuitive-experience',
        views: {
          '@': {
            templateUrl: 'src/app/intuitive-experience/intuitive-experience.tpl.html',
            controller: 'IntuitiveController as intuitive',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      })
      .state('root.intuitive-experience_rotating-bezel', {
        url: '/intuitive-experience/rotating-bezel',
        views: {
          '@': {
            templateUrl: 'src/app/intuitive-experience/rotating-bezel/rotating-bezel.tpl.html',
            controller: 'IntuitiveController as intuitive',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      });
  }

  /**
   * @name  IntuitiveController
   * @description Controller
   */
  function IntuitiveController(data, $scope) {
    $scope.data = data;
  }

  angular.module('intuitiveExperience', [])
    .config(config)
    .controller('IntuitiveController', IntuitiveController);
})();
