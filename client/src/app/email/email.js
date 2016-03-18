(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.email', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/email/email.html',
            controller: 'EmailController as email',
          }
        }
      });
  }

  /**
   * @name  HomeController
   * @description Controller
   */
  function EmailController($scope, $state) {
    
   $scope.email = {
    email : ''
   };

   $scope.checked = false;
   $scope.opa = 0;

   $scope.prompt = '';
   $scope.valid = false;

   $scope.favorite;

   // $('.checkbox').checkbox();

   $scope.send = function()
   {
    console.log($scope.valid)
    if($scope.valid){ 
      console.log(jQuery('#subscribeForm'))
      jQuery('#subscribeForm').submit();
      $state.go('thanks')
    }
      
   }

   $scope.setFavorite = function(favorite){
    $scope.favorite = favorite;
   }

   $scope.toggleChecked = function()
   {
   
      $scope.checked = !$scope.checked;
      if($scope.checked){
        $scope.opa = 1;
      }
      else
        $scope.opa = 0;
   }

   $scope.validateEmail = function (e) {
    console.log(e);
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search (filter) != -1;
  }


    $scope.validateForm = function()
    {
      var result = $scope.validateEmail($scope.email.email);
      if($scope.checked && result)
      {
        $scope.valid = true;
        return {
          "background-color" : "#FD4600"
        }
      }else{
        $scope.valid = false;
        return {
          "background-color" : "#FFA287"
        }
      }
    }
   
  }

  angular.module('app.email', [])
    .config(config)
    .controller('EmailController', EmailController);
})();
