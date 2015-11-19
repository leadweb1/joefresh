(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.convenience-more', {
        url: '/convenience-more',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'ConvenienceController as convenience',
          }
        }
      })
      .state('root.convenience-more_notifications', {
        url: '/convenience-more/notifications',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'NotificationsController as convenience',
          }
        }
      })
      .state('root.convenience-more_samsung-pay', {
        url: '/convenience-more/samsung-pay',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'SamsungPayController as convenience',
          }
        }
      })
      .state('root.convenience-more_additional-features', {
        url: '/convenience-more/additional-features',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'AdditionalFeaturesController as convenience',
          }
        }
      })
      .state('root.convenience-more_accessories', {
        url: '/convenience-more/accessories',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'AccessoriesController as convenience',
          }
        }
      });
  }

  /**
   * @name  ConvenienceController
   * @description Controller
   */
  function ConvenienceController(data, DataService, ExperienceService, $scope) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/convenience-more/convenience-more.tpl.html',
        top: DataService.getSectionByName('convenience-more'),
    });
  }

  /**
   * @name  NotificationsController
   * @description Controller
   */
  function NotificationsController(data, DataService, ExperienceService, $scope, $timeout) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/convenience-more/notifications/notifications.tpl.html',
        section: DataService.getSectionByName('notifications'),
        top: DataService.getSectionByName('convenience-more'),
    });
    
    $scope.prevSlide = function() {
        var $slider = jQuery('.slider-container:not(.ng-hide)');
        $slider.slick('slickPrev');
    };
    
    $scope.nextSlide = function() {
        var $slider = jQuery('.slider-container:not(.ng-hide)');
        $slider.slick('slickNext');
    };
    
    $scope.changeFeature = function(index) {
        $scope.experience.step = index;
        $scope.experience.startExperience(false, $scope.experience);
    };
    
    $scope.tryAgain = function() {        
        jQuery('.slick-slider').each(function(){
            jQuery(this).slick('slickGoTo', 0);
        });
        
        $scope.experience.initExperience();
    }
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.convenienceMore.sections.notifications.experience, $scope, $timeout);    
    $scope.experience.initExperience();
  }

  /**
   * @name  SamsungPayController
   * @description Controller
   */
  function SamsungPayController(data, DataService, ExperienceService, $scope, $timeout) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/convenience-more/samsung-pay/samsung-pay.tpl.html',
        section: DataService.getSectionByName('samsung-pay'),
        top: DataService.getSectionByName('convenience-more'),
    });
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.convenienceMore.sections.samsungPay.experience, $scope, $timeout);    
    $scope.experience.initExperience();
  }

  /**
   * @name  AdditionalFeaturesController
   * @description Controller
   */
  function AdditionalFeaturesController(data, DataService, ExperienceService, $scope, $timeout) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/convenience-more/additional-features/additional-features.tpl.html',
        section: DataService.getSectionByName('additional-features'),
        top: DataService.getSectionByName('convenience-more'),
    });
    
    $scope.currentSlide = 1;
    
    $scope.prevSlide = function() {
        var $slider = jQuery('.slider-container:not(.ng-hide)');
        $slider.slick('slickPrev');
    };
    
    $scope.nextSlide = function() {
        var $slider = jQuery('.slider-container:not(.ng-hide)');
        $slider.slick('slickNext');
    };
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.convenienceMore.sections.additionalFeatures.experience, $scope, $timeout);    
    $scope.experience.initExperience();
  }

  /**
   * @name  AccessoriesController
   * @description Controller
   */
  function AccessoriesController(data, DataService, ExperienceService, $scope, $timeout) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/convenience-more/accessories/accessories.tpl.html',
        section: DataService.getSectionByName('accessories'),
        top: DataService.getSectionByName('convenience-more'),
    });
    
    $scope.activeWatch = '';
    $scope.activeBand = '01';
    $scope.selectBand = false;
    
    $scope.changeWatch = function(watch) {
        $scope.activeWatch = watch;
        $scope.activeBand = '01';
    };
    
    $scope.changeBand = function() {
        $scope.selectBand = true;
    };
    
    $scope.chooseBand = function(band) {
        $scope.activeBand = band;
        $scope.selectBand = false;
    };
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.convenienceMore.sections.accessories.experience, $scope, $timeout);    
    $scope.experience.initExperience();
  }

  angular.module('app.convenienceAndMore', [])
    .config(config)
    .controller('ConvenienceController', ConvenienceController)
    .controller('NotificationsController', NotificationsController)
    .controller('SamsungPayController', SamsungPayController)
    .controller('AdditionalFeaturesController', AdditionalFeaturesController)
    .controller('AccessoriesController', AccessoriesController)
    ;
})();
