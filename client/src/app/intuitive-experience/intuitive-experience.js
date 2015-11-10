(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.intuitive-experience', {
        url: '/intuitive-experience',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'IntuitiveController as intuitive',
          }
        }
      })
      .state('root.intuitive-experience_rotating-bezel', {
        url: '/intuitive-experience/rotating-bezel',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'IntuitiveRotatingController as intuitive',
          }
        }
      });
  }

  /**
   * @name  IntuitiveController
   * @description Controller
   */
  function IntuitiveController(data, DataService, $scope) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/intuitive-experience/intuitive-experience.tpl.html',
        top: DataService.getSectionByName('intuitive-experience'),
    });
  }

  /**
   * @name  IntuitiveRotatingController 
   * @description Controller
   */
  function IntuitiveRotatingController(data, DataService, ExperienceService, $scope, $timeout) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/intuitive-experience/rotating-bezel/rotating-bezel.tpl.html',
        section: DataService.getSectionByName('rotating-bezel'),
        top: DataService.getSectionByName('intuitive-experience'),
    });
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.intuitive_experience.sections.rotating_bezel.experience, $scope, $timeout);    
    $scope.experience.initExperience();
  }

  angular.module('app.intuitiveExperience', [])
    .config(config)
    .controller('IntuitiveController', IntuitiveController)
    .controller('IntuitiveRotatingController', IntuitiveRotatingController);
})();
