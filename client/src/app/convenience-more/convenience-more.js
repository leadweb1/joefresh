(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.convenience-more', {
        url: '/convenience-more',
        views: {
          '@': {
            templateUrl: 'src/app/convenience-more/convenience-more.tpl.html',
            controller: 'ConvenienceController as convenience',
          }
        }
      })
      .state('root.convenience-more_notifications', {
        url: '/convenience-more/notifications',
        views: {
          '@': {
            templateUrl: 'src/app/convenience-more/notifications/notifications.tpl.html',
            controller: 'ConvenienceController as convenience',
          }
        }
      })
      .state('root.convenience-more_samsung-pay', {
        url: '/convenience-more/samsung-pay',
        views: {
          '@': {
            templateUrl: 'src/app/convenience-more/samsung-pay/samsung-pay.tpl.html',
            controller: 'ConvenienceController as convenience',
          }
        }
      })
      .state('root.convenience-more_additional-features', {
        url: '/convenience-more/additional-features',
        views: {
          '@': {
            templateUrl: 'src/app/convenience-more/additional-features/additional-features.tpl.html',
            controller: 'ConvenienceController as convenience',
          }
        }
      })
      .state('root.convenience-more_accessories', {
        url: '/convenience-more/accessories',
        views: {
          '@': {
            templateUrl: 'src/app/convenience-more/accessories/accessories.tpl.html',
            controller: 'ConvenienceController as convenience',
          }
        }
      });
  }

  /**
   * @name  ConvenienceController
   * @description Controller
   */
  function ConvenienceController() {
  }

  angular.module('app.convenienceAndMore', [])
    .config(config)
    .controller('ConvenienceController', ConvenienceController);
})();
