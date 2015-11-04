(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.aesthetic-elegant-design', {
        url: '/aesthetic-elegant-design',
        views: {
          '@': {
            templateUrl: 'src/app/aesthetic-elegant-design/aesthetic-elegant-design.tpl.html',
            controller: 'AestheticController as aesthetic',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      })
      .state('root.aesthetic-elegant-design_stylish-smart-gear', {
        url: '/aesthetic-elegant-design/stylish-smart-gear',
        views: {
          '@': {
            templateUrl: 'src/app/aesthetic-elegant-design/stylish-smart-gear/stylish-smart-gear.tpl.html',
            controller: 'AestheticController as aesthetic',
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
   * @name  AestheticController
   * @description Controller
   */
  function AestheticController(data, $scope) {
    $scope.data = data;
  }

  angular.module('aestheticElegantDesign', [])
    .config(config)
    .controller('AestheticController', AestheticController);
})();
