(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.video', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/video/video.html',
            controller: 'VideoController as video',
          }
        }
      });
  }

  /**
   * @name  HomeController
   * @description Controller
   */
  function VideoController($scope, $state) {

    $scope.goToVideos = function()
    {
      $state.go('videos')
    }


      $scope.toggleAudio = function()
      {



        if( $("#video").prop('muted') ){
          $("#video").prop('muted', false);
          $("#mute").toggleClass('muted')
        }else{
          $("#video").prop('muted', true);
          $("#mute").toggleClass('muted')
        }
      }
   
  }

  angular.module('app.video', [])
    .config(config)
    .controller('VideoController', VideoController);
})();
