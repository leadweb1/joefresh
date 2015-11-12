(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.aesthetic-elegant-design', {
        url: '/aesthetic-elegant-design',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'AestheticController as aesthetic',
          }
        }
      })
      .state('root.aesthetic-elegant-design_stylish-smart-gear', {
        url: '/aesthetic-elegant-design/stylish-smart-gear',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'AestheticStylishController as aesthetic',
          }
        }
      });
  }

  /**
   * @name  AestheticController
   * @description Controller
   */
  function AestheticController(data, DataService, $scope) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/aesthetic-elegant-design/aesthetic-elegant-design.tpl.html',
        top: DataService.getSectionByName('aesthetic-elegant-design'),
    });
  }

  /**
   * @name  AestheticStylishController
   * @description Controller
   */
  function AestheticStylishController(data, DataService, ExperienceService, $scope, $timeout) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/aesthetic-elegant-design/stylish-smart-gear/stylish-smart-gear.tpl.html',
        section: DataService.getSectionByName('stylish-smart-gear'),
        top: DataService.getSectionByName('aesthetic-elegant-design'),
    });
    
    $scope.model = 'gears2';
    $scope.color = 'black';
    $scope.colorTitle = 'Dark Gray';
    
    $scope.changeModel = function(model) {
        var $model = $scope.experience.data.tabs[model];
        
        $scope.model = $model.name;
        this.changeColor(model, $model.defaultColor)
    };
    
    $scope.changeColor = function(model, color) {
        var $model = $scope.experience.data.tabs[model];
        
        $scope.color = color;
        $scope.colorTitle = $model.colors[color].title;
    };
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.aesthetic_elegant_design.sections.stylish_smart_gear.experience, $scope, $timeout);    
    $scope.experience.initExperience();
  }

  angular.module('app.aestheticElegantDesign', [])
    .config(config)
    .controller('AestheticController', AestheticController)
    .controller('AestheticStylishController', AestheticStylishController);
})();
