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
  function AestheticStylishController(data, DataService, $scope) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/aesthetic-elegant-design/stylish-smart-gear/stylish-smart-gear.tpl.html',
        section: DataService.getSectionByName('stylish-smart-gear'),
        top: DataService.getSectionByName('aesthetic-elegant-design'),
    });
  }

  angular.module('app.aestheticElegantDesign', [])
    .config(config)
    .controller('AestheticController', AestheticController)
    .controller('AestheticStylishController', AestheticStylishController);
})();
