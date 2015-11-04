(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.try-on', {
        url: '/try-on',
        views: {
          '@': {
            templateUrl: 'src/app/try-on/try-on.tpl.html',
            controller: 'TryOnController as try-on',
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
   * @name  TryOnController
   * @description Controller
   */
  function TryOnController(data, $scope) {
    $scope.data = data;
  }

  angular.module('tryOn', [])
    .config(config)
    .controller('TryOnController', TryOnController);
})();
