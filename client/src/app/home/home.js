(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/home/home.tpl.html',
            controller: 'HomeController as home',
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
   * @name  HomeController
   * @description Controller
   */
  function HomeController(data, $scope) {
    $scope.data = data;
    $scope.activeSection = -1;
    
    $scope.selectSection = function(index) {
        $scope.activeSection = index;
    }
  }

  angular.module('home', [])
    .config(config)
    .controller('HomeController', HomeController);
})();
