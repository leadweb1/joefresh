(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.videos', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/videos/videos.html',
            controller: 'VideosController as videos',
          }
        }
      });
  }

  /**
   * @name  HomeController
   * @description Controller
   */
  function VideosController($scope, $state) {
    console.log('here')

    $scope.goToVideo = function()
    {
      $state.go('video');
    }
   
  }

  angular.module('app.videos', [])
    .config(config)
    .controller('VideosController', VideosController);
})();
