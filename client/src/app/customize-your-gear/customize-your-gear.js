(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.customize-your-gear', {
        url: '/collection',
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
  function CustomizeController(data, DataService, ExperienceService, $scope, $timeout, $element) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/customize-your-gear/customize-your-gear.html',
        top: DataService.getSectionByName('customize-your-gear'),
    });

    $scope.images = [
          {
        title: 'This Collection Title',
        url:'assets/images/collection/model.png'
      },
          {
        title: 'This Collection Title',
        url:'assets/images/collection/model.png'
      },
          {
        title: 'This Collection Title',
        url:'assets/images/collection/model.png'
      },
          {
        title: 'This Collection Title',
        url:'assets/images/collection/model.png'
      },
          {
        title: 'This Collection Title',
        url:'assets/images/collection/model.png'
      },
          {
        title: 'This Collection Title',
        url:'assets/images/collection/model.png'
      },
          {
        title: 'This Collection Title',
        url:'assets/images/collection/model.png'
      }
    ];
    
    $scope.activeSlider = 'watch';
    $scope.activeSliderMaxSlides = 9;
    $scope.modelTitle = 'Gear 2 / Dark Grey';
    $scope.faceTitle = 'Modern Utility';

    
    $scope.changeSlider = function(slider) {
      console.log('change slider')
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
      $scope.hideBackgroundSlides()
        var title = jQuery('#watch .slick-current').data('title');
        $scope.modelTitle = title;
    };
    
    $scope.setFaceTitle = function() {
        var title = jQuery('#watchFace .slick-current').data('title');
        $scope.faceTitle = title;
    };

    $scope.hideBackgroundSlides = function() {
    }
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.customizeYourGear.experience, $scope, $timeout);    
    $scope.experience.initExperience();
    
  }

  angular.module('app.customizeYourGear', [])
    .config(config)
    .controller('CustomizeController', CustomizeController);
})();






























