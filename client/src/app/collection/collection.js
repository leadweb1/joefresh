(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.collection', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/collection/collection.html',
            controller: 'CollectionController as collection',
          }
        }
      });
  }

  /**
   * @name  collectionController
   * @description Controller
   */
  function CollectionController($scope) {
    
       
    $scope.activeSlider = 'watch';
    $scope.activeSliderMaxSlides = 3;
    $scope.modelTitle = 'Gear 2 / Dark Grey';
    $scope.faceTitle = 'Modern Utility';

        $scope.changeSlider = function(slider) {
          $scope.activeSlider = slider;
                  
          $timeout(function(){
            var $slider = jQuery('.slider-container:not(.ng-hide)');
            var $slides = $slider.find('.slick-slide');
            $scope.activeSliderMaxSlides = $slides.length;
            
            if($slider.attr('id') === 'watchFace') {
                var $watchSlider = jQuery('.slider-container.ng-hide');
                var $overlay = $slider.find('.slider-overlay');
                var overlayImage = $watchSlider.find('.slick-current img').attr('src');
                $overlay.find('img').attr('src', overlayImage);
            }
            else {
                var $watchFaceSlider = jQuery('.slider-container.ng-hide');
                var backgroundImage = $watchFaceSlider.find('.slick-current img').attr('src');
                $slider.css('background-image','url(\''+backgroundImage+'\')');
            }
            
            $slides.each(function(index){
              var $slide = jQuery(this);
              
              if($slide.hasClass('slick-current')) {
                  $slider.slick('slickGoTo', index);
              }
            });
          },100);
      };

          $scope.prevSlide = function() {
            var $slider = jQuery('.slider-container:not(.ng-hide)');
            $slider.slick('slickPrev');
            
            $scope.setModelTitle();
            $scope.setFaceTitle();
            };
            
            $scope.nextSlide = function() {
                var $slider = jQuery('.slider-container:not(.ng-hide)');
                $slider.slick('slickNext');
                
                $scope.setModelTitle();
                $scope.setFaceTitle();
            };
            
            $scope.setModelTitle = function() {
                var title = jQuery('#watch .slick-current').data('title');
                $scope.modelTitle = title;
            };
            
            $scope.setFaceTitle = function() {
                var title = jQuery('#watchFace .slick-current').data('title');
                $scope.faceTitle = title;
            };

   
  }

  angular.module('app.collection', [])
    .config(config)
    .controller('CollectionController', CollectionController);
})();
