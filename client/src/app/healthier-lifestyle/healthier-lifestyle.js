(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.healthier-lifestyle', {
        url: '/healthier-lifestyle',
        views: {
          '@': {
            templateUrl: 'src/app/healthier-lifestyle/healthier-lifestyle.tpl.html',
            controller: 'HealthierController as healthier',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      })
      .state('root.healthier-lifestyle_track-your-health', {
        url: '/healthier-lifestyle/track-your-health',
        views: {
          '@': {
            templateUrl: 'src/app/healthier-lifestyle/track-your-health/track-your-health.tpl.html',
            controller: 'HealthierController as healthier',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      })
      .state('root.healthier-lifestyle_24h-activity-log', {
        url: '/healthier-lifestyle/24h-activity-log',
        views: {
          '@': {
            templateUrl: 'src/app/healthier-lifestyle/24h-activity-log/24h-activity-log.tpl.html',
            controller: 'HealthierController as healthier',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      })
      .state('root.healthier-lifestyle_health-clock', {
        url: '/healthier-lifestyle/health-clock',
        views: {
          '@': {
            templateUrl: 'src/app/healthier-lifestyle/health-clock/health-clock.tpl.html',
            controller: 'HealthierController as healthier',
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
   * @name  HealthierController
   * @description Controller
   */
  function HealthierController(data, $scope) {
    $scope.data = data;
  }

  angular.module('healthierLifestyle', [])
    .config(config)
    .controller('HealthierController', HealthierController);
})();
