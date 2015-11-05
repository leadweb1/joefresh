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
    })
    .filter('nl2br', function($sce) {
      return function(msg, is_xhtml) { 
        var is_xhtml = is_xhtml || true;
        var breakTag = (is_xhtml) ? '<br />' : '<br>';
        var msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
        return $sce.trustAsHtml(msg);
      }
    });
})();
