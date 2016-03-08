(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.collection', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/collection/collection.html',
            controller: 'CollectionController as collection',
          }
        }
      });
  }

  /**
   * @name  collectionController
   * @description Controller
   */
  function CollectionController($scope) {
    
   
   
  }

  angular.module('app.collection', [])
    .config(config)
    .controller('CollectionController', CollectionController);
})();
