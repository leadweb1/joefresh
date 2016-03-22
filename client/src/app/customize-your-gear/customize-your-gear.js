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
  function CustomizeController(data, DataService, ExperienceService, $scope, $timeout) {
    window.onload = function(){
      console.log(document.getElementById('watch'));
    }
    

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

    var men = false;
    var children = false;

    
    $scope.changeSlider = function(slider) {

      if(slider == 'men' && !men){
        $('.experience').removeClass('opaque');
        men = true;
      }

      if(slider == 'children' && !children){
        $('.experience').removeClass('opaque');
        children = true;
      }

      // Control the nice fade in (working)
      // $('.content').removeClass('fadeIn').animate({'nothing':null}, 1, function () {
      // $('.content').addClass('fadeIn');
      //   setTimeout(function() {
      //     console.log('fade gif');
      //     jQuery('#gif').addClass('gifFade');
      //   }, 1000);
      // });
      // jQuery('#gif').removeClass('gifFade');

        $scope.activeSlider = slider;
                
        $timeout(function(){
          var $slider = jQuery('.slider-container:not(.ng-hide)');
          var $slides = $slider.find('.slick-slide');
          $scope.activeSliderMaxSlides = $slides.length;
          
          // var $watchFaceSlider = jQuery('.slider-container.ng-hide');

          $slides.each(function(index){
            var $slide = jQuery(this);
            
            if($slide.hasClass('slick-current')) {
                $slider.slick('slickGoTo', index);
            }
          });
        },100);

        // jQuery('.content').css('opacity', '1');
        setTimeout(function() {
          $('.experience').addClass('opaque')
      }, 600)

    };
    
    $scope.prevSlide = function() {
        var $slider = jQuery('.slider-container:not(.ng-hide)');
        $slider.slick('slickPrev');
    };
    
    $scope.nextSlide = function() {
        var $slider = jQuery('.slider-container:not(.ng-hide)');
        $slider.slick('slickNext');
    };

    $scope.hideBackgroundSlides = function() {
    };

    $scope.goToSlide = function(index)
    {
      var $slider = jQuery('.slider-container:not(.ng-hide)');
      $slider.slick('slickGoTo', index);
    };
    
    // Start experience
    $scope.experience = ExperienceService.get($scope.data.content.sections.customizeYourGear.experience, $scope, $timeout);    
    $scope.experience.initExperience();
    

    jQuery(document).ready(function () {
      setTimeout(function() {
        $('.experience').addClass('opaque')
      }, 600)
    });
  }

  angular.module('app.customizeYourGear', [])
    .config(config)
    .controller('CustomizeController', CustomizeController);
})();






























