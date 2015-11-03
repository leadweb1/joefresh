(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.healthier-lifestyle.track-your-health', {
        url: '/healthier-lifestyle/track-your-health',
        views: {
          '@': {
            templateUrl: 'src/app/healthier-lifestyle/track-your-health/track-your-health.tpl.html',
            controller: 'HealthierCtrl as healthier',
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
   * @name  HealthierCtrl
   * @description Controller
   */
  function HealthierCtrl(data, $scope) {
    $scope.data = data;
  }

  angular.module('healthier-lifestyle', [])
    .config(config)
    .controller('HealthierCtrl', HealthierCtrl);
})();
