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
    $scope.contentTemplate = 'src/app/home/_content.tpl.html';
    
    $scope.selectSection = function(index) {
        // Fade all sections
        var sections = $scope.data.content.sections;
        for(var s in sections) {
            if(s) {
                var section = sections[s];
                var $section = angular.element(document.getElementsByClassName(section.name)[0]);
                $section.addClass('faded');
            }
        }
        
        // Set selected section and fade opacity to 1 (through ng-class)
        $scope.activeSection = index;
    };
  }

  angular.module('app.home', [])
    .config(config)
    .controller('HomeController', HomeController);
})();
