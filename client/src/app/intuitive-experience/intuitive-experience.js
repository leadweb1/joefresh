(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.intuitive-experience.rotating-bezel', {
        url: '/intuitive-experience/rotating-bezel',
        views: {
          '@': {
            templateUrl: 'src/app/intuitive-experience/rotating-bezel/rotating-bezel.tpl.html',
            controller: 'IntuitiveCtrl as intuitive',
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
   * @name  IntuitiveCtrl
   * @description Controller
   */
  function IntuitiveCtrl(data, $scope) {
    $scope.data = data;
  }

  angular.module('intuitive-experience', [])
    .config(config)
    .controller('IntuitiveCtrl', IntuitiveCtrl);
})();
