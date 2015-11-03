(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.aesthetic-elegant-design.stylish-smart-gear', {
        url: '/aesthetic-elegant-design/stylish-smart-gear',
        views: {
          '@': {
            templateUrl: 'src/app/aesthetic-elegant-design/stylish-smart-gear/stylish-smart-gear.tpl.html',
            controller: 'AestheticCtrl as aesthetic',
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
   * @name  AestheticCtrl
   * @description Controller
   */
  function AestheticCtrl(data, $scope) {
    $scope.data = data;
  }

  angular.module('aesthetic-elegant-design', [])
    .config(config)
    .controller('AestheticCtrl', AestheticCtrl);
})();
