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
  function EmailController($scope, $state, $rootScope) {
    
   $scope.email = {
    email : ''
   };

   $scope.checked = false;
   $scope.opa = 0;

   $scope.prompt = '';
   $scope.valid = false;

   // $('.checkbox').checkbox();

   $scope.send = function()
   {
    if($scope.valid){ 
      console.log(jQuery('#subscribeForm'));
      jQuery('#subscribeForm').submit();
      $state.go('thanks');
    }
      
   };

   $scope.toggleChecked = function()
   {
   
      $scope.checked = !$scope.checked;
      if($scope.checked){
        $scope.opa = 1;
      }else{
        $scope.opa = 0;
      }
   };

   $scope.validateEmail = function (e) {
    console.log(e);
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if(String(e).search (filter) === -1){
      return false;
    }else{
      return true;
    }
    // return String(e).search (filter) != -1;
  };

  $scope.submitAnalytics = function(event) {
    var em = 'submit-email_'+$scope.email.email;
    $rootScope.submissionAction('click', 'action', em); 
    event.stopPropagation();
  };


    $scope.validateForm = function()
    {
      var result = $scope.validateEmail($scope.email.email);
      if($scope.checked && result)
      {
        $scope.valid = true;
        return {
          'background-color' : '#FD4600'
        };
      }else{
        $scope.valid = false;
        return {
          'background-color' : '#FFA287'
        };
      }
    };

    $scope.disable = function()
    {
      if($scope.checked && $scope.validateEmail($scope.email.email)){
        return false;
      }else{
        return true;
      }
    };
   
  }

  angular.module('app.email', [])
    .config(config)
    .controller('EmailController', EmailController);
})();
