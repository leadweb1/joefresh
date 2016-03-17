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
      'assets/images/collection/women/Women_01.jpg',
      'assets/images/collection/women/Women_02.jpg',
      'assets/images/collection/women/Women_03.jpg',
      'assets/images/collection/women/Women_04.jpg',
      'assets/images/collection/women/Women_05.jpg',
      'assets/images/collection/women/Women_06.jpg',
    ];
    
    $scope.activeSlider = 'women';
    $scope.activeSliderMaxSlides = 9;
    $scope.modelTitle = 'Gear 2 / Dark Grey';
    $scope.faceTitle = 'Modern Utility';

    
    $scope.changeSlider = function(slider) {

      $('.content').removeClass('fadeIn').animate({'nothing':null}, 1, function () {
      $('.content').addClass('fadeIn');
      });


      console.log('change slider')
        $scope.activeSlider = slider;
                
        $timeout(function(){
          var $slider = jQuery('.slider-container:not(.ng-hide)');
          var $slides = $slider.find('.slick-slide');
          $scope.activeSliderMaxSlides = $slides.length;
          
          var $watchFaceSlider = jQuery('.slider-container.ng-hide');

          $slides.each(function(index){
            var $slide = jQuery(this);
            
            if($slide.hasClass('slick-current')) {
                $slider.slick('slickGoTo', index);
            }
          });
        },100);

        // jQuery('.content').css('opacity', '1');
    };
    
    $scope.prevSlide = function() {
        var $slider = jQuery('.slider-container:not(.ng-hide)');
        $slider.slick('slickPrev');
    };
    
    $scope.nextSlide = function() {
        var $slider = jQuery('.slider-container:not(.ng-hide)');
        $slider.slick('slickNext');
    };
    
    // $scope.setModelTitle = function() {
    //   $scope.hideBackgroundSlides()
    //     var title = jQuery('#watch .slick-current').data('title');
    //     $scope.modelTitle = title;
    // };
    
    // $scope.setFaceTitle = function() {
    //     var title = jQuery('#watchFace .slick-current').data('title');
    //     $scope.faceTitle = title;
    // };

    $scope.hideBackgroundSlides = function() {
    }
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.customizeYourGear.experience, $scope, $timeout);    
    $scope.experience.initExperience();

    // $scope.changeSlider('women');
    // setTimeout(function() {
    //    $scope.changeSlider('men');
    //    setTimeout(function() {
    //        $scope.changeSlider('children');
    //         setTimeout(function() {
    //            $scope.changeSlider('women');
    //         }, 1000);
    //     }, 1000);
    // }, 00);
   
    
    
    
    
  }

  angular.module('app.customizeYourGear', [])
    .config(config)
    .controller('CustomizeController', CustomizeController);
})();






























