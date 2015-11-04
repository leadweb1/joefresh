(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderController',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          },
          'footer': {
            templateUrl: 'src/common/footer.tpl.html',
            controller: 'FooterController'
          }
        }
      });
    //hammerDefaultOptsProvider.set({recognizers: [[Hammer.Tap, {time: 250}]] });
  }

  function MainCtrl($log) {
    $log.debug('MainCtrl laoded!');
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'ui',
      'ui.router',
      'ngAnimate',
      'angular-gestures',
      'home',
      'aestheticElegantDesign',
      'intuitiveExperience',
      'healthierLifestyle',
      'convenienceAndMore',
      'tryOn',
      'common.header',
      'common.footer',
      'common.services.data',
      'common.directives.version',
      'common.filters.uppercase',
      'common.interceptors.http',
      'templates'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0')
    .filter('filterDisabledSections', function() {
      return function(input) {
        var inputArray = [];
    
        for(var item in input) {
          inputArray.push(input[item]);
        }
    
        return inputArray.filter(function(v) { return v.disabled !== true; });
      };
    });
})();
