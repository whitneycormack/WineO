"use strict";

app.controller("loginCtrl", function($scope, $location, $rootScope, AuthFactory){
    $rootScope.userIsLoggedIn = false;
    $scope.registerMode = true;

    $scope.switchToRegisterMode = function() {
      $scope.registerMode = true;
    };

    $scope.switchToLoginMode = function() {
      $scope.registerMode = false;
    };

    $scope.register = function() {

      AuthFactory.authWithProvider().then(function(){
        $rootScope.userIsLoggedIn = true;
      });
    };

    if ($location.path() === "/logout"){
      AuthFactory.logout();
      $rootScope.userIsLoggedIn = false;
    }
});
