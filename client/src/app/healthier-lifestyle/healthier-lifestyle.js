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
    $scope.data = angular.extend({}, data, {
        template: 'src/app/healthier-lifestyle/healthier-lifestyle.tpl.html',
        top: DataService.getSectionByName('healthier-lifestyle'),
    });
  }

  /**
   * @name  HealthierTrackController
   * @description Controller
   */
  function HealthierTrackController(data, DataService, ExperienceService, $scope, $timeout) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/healthier-lifestyle/track-your-health/track-your-health.tpl.html',
        top: DataService.getSectionByName('healthier-lifestyle'),
    });
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.healthier_lifestyle.sections.track_your_health.experience, $scope, $timeout);    
    $scope.experience.initExperience();
  }

  /**
   * @name  HealthierActivityController
   * @description Controller
   */
  function HealthierActivityController(data, DataService, ExperienceService, $scope, $timeout) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/healthier-lifestyle/24h-activity-log/24h-activity-log.tpl.html',
        top: DataService.getSectionByName('healthier-lifestyle'),
    });
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.healthier_lifestyle.sections.activity_log.experience, $scope, $timeout);    
    $scope.experience.initExperience();
  }

  /**
   * @name  HealthierHealthClockController
   * @description Controller
   */
  function HealthierHealthClockController(data, DataService, ExperienceService, $scope, $timeout) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/healthier-lifestyle/health-clock/health-clock.tpl.html',
        top: DataService.getSectionByName('healthier-lifestyle'),
    });
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.healthier_lifestyle.sections.health_clock.experience, $scope, $timeout);    
    $scope.experience.initExperience();
  }

  angular.module('app.healthierLifestyle', [])
    .config(config)
    .controller('HealthierController', HealthierController)
    .controller('HealthierTrackController', HealthierTrackController)
    .controller('HealthierActivityController', HealthierActivityController)
    .controller('HealthierHealthClockController', HealthierHealthClockController);
})();
