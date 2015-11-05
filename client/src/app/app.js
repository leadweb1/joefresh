(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider, hammerDefaultOptsProvider) {
    $urlRouterProvider.otherwise('/');
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
            [Hammer.Tap],
            [Hammer.Press, {time: 250}],
            [Hammer.Swipe],
        ],
    });
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
      'app.home',
      'app.aestheticElegantDesign',
      'app.intuitiveExperience',
      'app.healthierLifestyle',
      'app.convenienceAndMore',
      'app.customizeYourGear',
      'common.header',
      'common.footer',
      'common.services.data',
      'common.directives.version',
      'common.filters.uppercase',
      'common.filters.filterDisabledSections',
      'common.filters.nl2br',
      'common.interceptors.http',
      'templates'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
