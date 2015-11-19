(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider, hammerDefaultOptsProvider, IdleProvider) {
    $urlRouterProvider.otherwise('/begin');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderController',
          },
          'footer': {
            templateUrl: 'src/common/footer.tpl.html',
            controller: 'FooterController'
          }
        },
        resolve: {
          data: function(DataService) {
            return DataService.get();
          }
        }
      });

    hammerDefaultOptsProvider.set({
        recognizers: [
            [Hammer.Tap, {}],
            //[Hammer.Press, {}],
            //[Hammer.Swipe, {}],
            [Hammer.Pan, {}], // For drag events
        ],
    });
    
    //IdleProvider.idle(5 * 60); // In seconds, default is 20min
    IdleProvider.timeout(5); // In seconds, default is 30sec
  }

  function MainCtrl($log, $scope, $state) {
    $log.debug('MainCtrl laoded!');
    
    $scope.$on('IdleTimeout', function() {
        console.log('Timeout');
        $state.go('root.splash');
    });
    
    $scope.isActiveState = function(state) {
        return ($state.current.name === state);
    };
  }

  function run($rootScope, $log, Idle) {
    $log.debug('App is running!');
    
    Idle.watch();
    
    $rootScope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase === '$apply' || phase === '$digest') {
          if(fn && (typeof(fn) === 'function')) {
              fn();
          }
      } else {
          this.$apply(fn);
      }
  };
}

  angular.module('app', [
      'ui',
      'ui.router',
      'ngAnimate',
      'ngIdle',
      'angular-gestures',
      'app.splash',
      'app.home',
      'app.aestheticElegantDesign',
      'app.intuitiveExperience',
      'app.healthierLifestyle',
      'app.convenienceAndMore',
      'app.customizeYourGear',
      'common.header',
      'common.footer',
      'common.services.data',
      'common.services.experience',
      'common.directives.version',
      'common.directives.carousel',
      'common.directives.threesixty',
      'common.filters.uppercase',
      'common.filters.filterDisabledSections',
      'common.filters.nl2br',
      'common.filters.strpad',
      'common.filters.objectLength',
      'common.interceptors.http',
      'templates'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
