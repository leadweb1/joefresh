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
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'HealthierController as healthier',
          }
        }
      })
      .state('root.healthier-lifestyle_track-your-health', {
        url: '/healthier-lifestyle/track-your-health',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'HealthierTrackController as healthier',
          }
        }
      })
      .state('root.healthier-lifestyle_24h-activity-log', {
        url: '/healthier-lifestyle/24h-activity-log',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'HealthierActivityController as healthier',
          }
        }
      })
      .state('root.healthier-lifestyle_health-clock', {
        url: '/healthier-lifestyle/health-clock',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'HealthierHealthClockController as healthier',
          }
        }
      });
  }

  /**
   * @name  HealthierController
   * @description Controller
   */
  function HealthierController(data, DataService, $scope) {
    $scope.data = {
        content: data.content,
        template: 'src/app/healthier-lifestyle/healthier-lifestyle.tpl.html',
        top: DataService.getSectionByName('healthier-lifestyle'),
    };
  }

  /**
   * @name  HealthierTrackController
   * @description Controller
   */
  function HealthierTrackController(data, DataService, $scope) {
    $scope.data = {
        content: data.content,
        template: 'src/app/healthier-lifestyle/track-your-health/track-your-health.tpl.html',
        top: DataService.getSectionByName('healthier-lifestyle'),
    };
  }

  /**
   * @name  HealthierActivityController
   * @description Controller
   */
  function HealthierActivityController(data, DataService, $scope) {
    $scope.data = {
        content: data.content,
        template: 'src/app/healthier-lifestyle/24h-activity-log/24h-activity-log.tpl.html',
        top: DataService.getSectionByName('healthier-lifestyle'),
    };
  }

  /**
   * @name  HealthierHealthClockController
   * @description Controller
   */
  function HealthierHealthClockController(data, DataService, $scope) {
    $scope.data = {
        content: data.content,
        template: 'src/app/healthier-lifestyle/health-clock/health-clock.tpl.html',
        top: DataService.getSectionByName('healthier-lifestyle'),
    };
    $scope.swipeLeft = function(event) {
        console.log('Next');
        console.log(event);
    }
    $scope.swipeRight = function(event) {
        console.log('Previous');
        console.log(event);
    }
  }

  angular.module('app.healthierLifestyle', [])
    .config(config)
    .controller('HealthierController', HealthierController)
    .controller('HealthierTrackController', HealthierTrackController)
    .controller('HealthierActivityController', HealthierActivityController)
    .controller('HealthierHealthClockController', HealthierHealthClockController);
})();
