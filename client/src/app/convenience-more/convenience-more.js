(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.convenience-more.notifications', {
        url: '/convenience-more/notifications',
        views: {
          '@': {
            templateUrl: 'src/app/convenience-more/notifications/notifications.tpl.html',
            controller: 'ConvenienceCtrl as convenience',
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
   * @name  ConvenienceCtrl
   * @description Controller
   */
  function ConvenienceCtrl(data, $scope) {
    $scope.data = data;
  }

  angular.module('convenience-more', [])
    .config(config)
    .controller('ConvenienceCtrl', ConvenienceCtrl);
})();
