(function () {
    'use strict';

    function experienceService() {
        return {
            tab: 1,
            step: 1,
            slider: null,
            data: null,
            $scope: null,
            $timeout: null,
            get: function (data, scope, timeout) {
                this.data = data;
                this.$scope = scope;
                this.$timeout = timeout;
                return this;
            },
            bezelRotateDragStart: function (event) {
            },
            bezelRotateDragEnd: function (event) {
                var target = angular.element(event.target).parent()[0];

                // Drag distance required (top center to left/right middle)
                var quadrantWidth = target.offsetWidth / 2;
                var quadrantHeight = target.offsetHeight / 2;
                var minDragDistance = Math.sqrt(
                        (quadrantWidth * quadrantWidth) +
                        (quadrantHeight * quadrantHeight)
                        ) * 0.6;

                if (event.distance > minDragDistance) {
                    this.step++;
                    this.runStep(this.tab, this.step);
                }
            },
            runStep: function (tab, step) {
                var $tab = this.data.tabs[tab - 1];
                var $step = $tab.steps[step - 1];

                if (tab === this.tab && step == this.step) {
                    if ($step.timeout !== undefined) {
                        this.$timeout(function (exp) {
                            if ($step.last === true) {
                                if ($tab.last === true) {
                                    //alert('Done!');
                                }
                                else {
                                    exp.slider.slick('slickGoTo', exp.tab);
                                }
                            }
                            else {
                                exp.step++;
                                exp.runStep(exp.tab, exp.step);
                            }
                        }.bind('exp', this).bind('$tab', $tab).bind('$step', $step), $step.timeout * 1000);
                    }
                }
            },
            startExperience: function (animate, exp) {
                if (animate === true) {
                    // Animate bezel
                }
                this.updateTitles(exp);
                exp.runStep(exp.tab, exp.step);
            },
            initExperience: function () {
                this.tab = 1;
                this.step = 1;
                this.slider = null;
                
                // Setup slider events
                this.$timeout(function (exp) {
                    exp.slider = jQuery('.slick-slider')
                            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                                var newTab = nextSlide + 1;
                                if (exp.tab !== newTab) {
                                    // Reset step
                                    exp.$scope.$apply(function () {
                                        exp.step = 1;
                                    });
                                }
                            })
                            .on('afterChange', function (event, slick, currentSlide) {
                                var newTab = currentSlide + 1;
                                if (exp.tab !== newTab && newTab <= exp.data.tabs.length) {
                                    // Change tab
                                    exp.$scope.$apply(function () {
                                        exp.tab = newTab;
                                    });

                                    exp.startExperience(false, exp);
                                }
                            });

                    exp.startExperience(true, exp);
                }.bind('exp', this), 100);
            },
            updateTitles: function(exp) {
                console.log(exp);
                exp.$scope.experienceTitle = exp.data.tabs[exp.tab -1].title;
                exp.$scope.experienceDescription = exp.data.tabs[exp.tab - 1].description;
            }
        };
    }

    angular.module('common.services.experience', [])
            .factory('ExperienceService', experienceService);
})();
