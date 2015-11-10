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
            if($scope.tab == 1) {
                if($scope.step == 2) {
                    $scope.step = 3;

                    if($scope.tab === 1 && $scope.step === 3) {
                        $timeout(function(){
                            $scope.step = 4;
                        }, 2000);
                    }
                }

                if($scope.step == 4) {
                    $scope.step = 5;

                    if($scope.tab === 1 && $scope.step === 5) {
                        $timeout(function(){
                            $scope.step = 6;
                        }, 2000);
                    }
                }

                if($scope.step == 6) {
                    $scope.step = 7;

                    if($scope.tab === 1 && $scope.step === 7) {
                        $timeout(function(){
                            $scope.slider.slick('slickGoTo', $scope.tab);
                        }, 2000);
                    }
                }
            }
            else if($scope.tab == 2) {
                if($scope.step == 2) {
                    $scope.step = 3;

                    if($scope.tab === 2 && $scope.step === 3) {
                        $timeout(function(){
                            $scope.step = 4;

                            if($scope.tab === 2 && $scope.step === 4) {
                                $timeout(function(){
                                    $scope.step = 5;

                                    if($scope.tab === 2 && $scope.step === 5) {
                                        $timeout(function(){
                                            $scope.step = 6;

                                            if($scope.tab === 2 && $scope.step === 6) {
                                                $timeout(function(){
                                                    $scope.slider.slick('slickGoTo', $scope.tab);
                                                }, 2000);
                                            }
                                        }, 500);
                                    };
                                }, 500);
                            }
                        }, 500);
                    }
                }
            }
            else if($scope.tab == 3) {
                if($scope.step == 2) {
                    $scope.step = 3;

                    if($scope.tab === 3 && $scope.step === 3) {
                        $timeout(function(){
                            $scope.step = 4;

                            if($scope.tab === 3 && $scope.step === 4) {
                                $timeout(function(){
                                    $scope.slider.slick('slickGoTo', $scope.tab);
                                }, 2000);
                            }
                        }, 500);
                    }
                }
            }
            else if($scope.tab == 4) {
                if($scope.step == 2) {
                    $scope.step = 3;

                    if($scope.tab === 4 && $scope.step === 3) {
                        $timeout(function(){
                            $scope.step = 4;

                            if($scope.tab === 4 && $scope.step === 4) {
                                $timeout(function(){
                                    alert('Done!')
                                }, 2000);
                            }
                        }, 500);
                    }
                }
            }
        }
    };
    
    $scope.startExperience = function() {
        if($scope.tab == 1) {
            // Animation
            
            // Go to step 2
            $timeout(function(){
                $scope.step = 2; 
            }, 1000);
        }
        else if($scope.tab == 2) {
            // Animation
            
            // Go to step 2
            $timeout(function(){
                $scope.step = 2; 
            }, 1000);
        }
        else if($scope.tab == 3) {
            // Animation
            
            // Go to step 2
            $timeout(function(){
                $scope.step = 2; 
            }, 1000);
        }
        else if($scope.tab == 4) {
            // Animation
            
            // Go to step 2
            $timeout(function(){
                $scope.step = 2; 
            }, 1000);
        }
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
    $scope.startExperience();
  }

  angular.module('app.intuitiveExperience', [])
    .config(config)
    .controller('IntuitiveController', IntuitiveController)
    .controller('IntuitiveRotatingController', IntuitiveRotatingController);
})();
