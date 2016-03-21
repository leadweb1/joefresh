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
  function VideoController($scope, $state, $stateParams) {

    var sound = 'assets/images/video/sound.svg';
    var mute = 'assets/images/video/mute.svg'
    $scope.icon = sound;

    console.log($stateParams.video == 'one')
    if($stateParams.video == 'one'){
      $scope.vid = 'assets/videos/JoeFresh_TopsDressesPolos-TransitShelter-1920x1080.webmhd.webm';
    }else if($stateParams.video == 'two')
    {
      $scope.vid = 'assets/videos/JoeFresh_FamilyKids_TransitShelter-1920x1080.webmhd.webm';
    }else{
      $scope.vid = 'assets/videos/JoeFresh_BTS_TransitShelter-1920x1080.webmhd.webm';
    }

    $scope.video = $stateParams.video;

    $scope.goToVideos = function()
    {
      $state.go('videos')
    }


      $scope.toggleAudio = function()
      {
        if( $("#video").prop('muted') ){
          $("#video").prop('muted', false);
          $("#mute").toggleClass('muted')
          $scope.icon = sound;
        }else{
          $("#video").prop('muted', true);
          $("#mute").toggleClass('muted');
          $scope.icon = mute;
        }
      }
   
  }

  angular.module('app.video', [])
    .config(config)
    .controller('VideoController', VideoController);
})();
