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
            resolve: {
                data2: function(DataService) {
                  var data = DataService.get();
                  
                  return {
                      content: data.content,
                      template: 'src/app/customize-your-gear/customize-your-gear.tpl.html',
                      section: DataService.getSectionByName('customize-your-gear'),
                  };
                },
            }
          }
        }
      });
  }

  /**
   * @name  CustomizeController
   * @description Controller
   */
  function CustomizeController(data, $scope) {
    $scope.data = data;
  }

  angular.module('app.customizeYourGear', [])
    .config(config)
    .controller('CustomizeController', CustomizeController);
})();
