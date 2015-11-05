(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.customize-your-gear', {
        url: '/customize-your-gear',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'CustomizeController as customize',
          }
        }
      });
  }

  /**
   * @name  CustomizeController
   * @description Controller
   */
  function CustomizeController(data, DataService, $scope) {
    $scope.data = {
        content: data.content,
        template: 'src/app/customize-your-gear/customize-your-gear.tpl.html',
        top: DataService.getSectionByName('customize-your-gear'),
    };
  }

  angular.module('app.customizeYourGear', [])
    .config(config)
    .controller('CustomizeController', CustomizeController);
})();
