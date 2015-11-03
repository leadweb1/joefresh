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
            controller: 'TryOnCtrl as try-on',
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
   * @name  TryOnCtrl
   * @description Controller
   */
  function TryOnCtrl(data, $scope) {
    $scope.data = data;
  }

  angular.module('try-on', [])
    .config(config)
    .controller('TryOnCtrl', TryOnCtrl);
})();
