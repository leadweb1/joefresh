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
    
    $scope.prevSlide = function() {
        var $slider = jQuery('.slider-container:not(.ng-hide)');
        $slider.slick('slickPrev');
    };
    
    $scope.nextSlide = function() {
        var $slider = jQuery('.slider-container:not(.ng-hide)');
        $slider.slick('slickNext');
    };
    
    $scope.startExperience = function() {
        $scope.experience.step = 2;
        $scope.experience.startExperience(false, $scope.experience);
    };
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.healthierLifestyle.sections.trackYourHealth.experience, $scope, $timeout);    
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
    $scope.experience = ExperienceService.get($scope.data.content.sections.healthierLifestyle.sections.activityLog.experience, $scope, $timeout);    
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
    $scope.experience = ExperienceService.get($scope.data.content.sections.healthierLifestyle.sections.healthClock.experience, $scope, $timeout);    
    $scope.experience.initExperience();
    
    $scope.faceTitle = 'Activity Sparkles';
    $scope.faceDescription = 'More particles appear';
    $scope.faceDescription2 = 'when you move more';
    
    $scope.prevSlide = function() {
        var $slider = jQuery('.slider-container:not(.ng-hide)');
        $slider.slick('slickPrev');
        
        $scope.setWatchFaceInfo();
    };
    
    $scope.nextSlide = function() {
        var $slider = jQuery('.slider-container:not(.ng-hide)');
        $slider.slick('slickNext');
        
        $scope.setWatchFaceInfo();
    };
    
    $scope.setWatchFaceInfo = function() {
        var title = jQuery('#watchFace .slick-current').data('title');
        var description = jQuery('#watchFace .slick-current').data('description');
        var description2 = jQuery('#watchFace .slick-current').data('description2');
        $scope.faceTitle = title;
        $scope.faceDescription = description;
        $scope.faceDescription2 = description2;
    };

  }

  angular.module('app.healthierLifestyle', [])
    .config(config)
    .controller('HealthierController', HealthierController)
    .controller('HealthierTrackController', HealthierTrackController)
    .controller('HealthierActivityController', HealthierActivityController)
    .controller('HealthierHealthClockController', HealthierHealthClockController);
})();
