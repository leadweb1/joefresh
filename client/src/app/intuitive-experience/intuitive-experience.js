(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.intuitive-experience', {
        url: '/intuitive-experience',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'IntuitiveController as intuitive',
          }
        }
      })
      .state('root.intuitive-experience_rotating-bezel', {
        url: '/intuitive-experience/rotating-bezel',
        views: {
          '@': {
            templateUrl: 'src/common/templates/section.tpl.html',
            controller: 'IntuitiveRotatingController as intuitive',
          }
        }
      });
  }

  /**
   * @name  IntuitiveController
   * @description Controller
   */
  function IntuitiveController(data, DataService, $scope) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/intuitive-experience/intuitive-experience.tpl.html',
        top: DataService.getSectionByName('intuitive-experience'),
    });
  }

  /**
   * @name  IntuitiveRotatingController 
   * @description Controller
   */
  function IntuitiveRotatingController(data, DataService, $rootScope, $scope, $timeout) {
    $scope.data = angular.extend({}, data, {
        template: 'src/app/intuitive-experience/rotating-bezel/rotating-bezel.tpl.html',
        section: DataService.getSectionByName('rotating-bezel'),
        top: DataService.getSectionByName('intuitive-experience'),
    });
    
    $scope.tab = 1;
    $scope.step = 1;
    $scope.slider = null;
    
    $scope.bezelRotateDragStart = function(event) {
    };
    
    $scope.bezelRotateDragEnd = function(event) {
        var target = angular.element(event.target).parent()[0];
        
        // Drag distance required (top center to left/right middle)
        var quadrantWidth = target.offsetWidth / 2;
        var quadrantHeight = target.offsetHeight / 2;
        var minDragDistance = Math.sqrt(
            (quadrantWidth * quadrantWidth) + 
            (quadrantHeight * quadrantHeight)
        ) * 0.8;

        if(event.distance > minDragDistance) {
           $scope.step++;
           $scope.runStep($scope.tab, $scope.step);
        }
    };
    
    $scope.runStep = function(tab, step) {
        var $tab = $scope.data.content.sections.intuitive_experience.sections.rotating_bezel.experience.tabs[tab - 1];
        var $step = $tab.steps[step - 1];
        
        if(tab === $scope.tab && step == $scope.step) {
            if($step.timeout !== undefined) {
                $timeout(function(){
                    if($step.last === true) {
                        if($tab.last === true) {
                            alert('Done!');
                        }
                        else {
                            $scope.slider.slick('slickGoTo', $scope.tab);
                        }
                    }
                    else {
                        $scope.step++;
                        $scope.runStep($scope.tab, $scope.step);
                    }
                }, $step.timeout * 1000);
            }
        }
    }
    
    $scope.startExperience = function(animate) {
        if(animate === true) {
            // Animate bezel
        }
        $scope.runStep($scope.tab, $scope.step);
    }

    // Setup slider events
    $timeout(function(){
        $scope.slider = jQuery('.slick-slider')
            .on('beforeChange', function(event, slick, currentSlide, nextSlide){
                var newTab = nextSlide + 1;
                if($scope.tab !== newTab) {
                    // Reset step
                    $scope.$apply(function(){
                        $scope.step = 1;
                    });
                }
            })
            .on('afterChange', function(event, slick, currentSlide){
                var newTab = currentSlide + 1;
                if($scope.tab !== newTab) {
                    // Change tab
                    $scope.$apply(function(){
                        $scope.tab = newTab;
                    });
                    
                    $scope.startExperience();
                }
            })
        ;
    }, 100);

    // Start experience
    $scope.startExperience(true);
  }

  angular.module('app.intuitiveExperience', [])
    .config(config)
    .controller('IntuitiveController', IntuitiveController)
    .controller('IntuitiveRotatingController', IntuitiveRotatingController);
})();
