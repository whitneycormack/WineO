"use strict";

var app = angular.module("WineO", ["ngRoute"])
.constant('FirebaseURL', "https://wine-o.firebaseio.com/");

app.config(function($routeProvider, FBCreds) {
  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  };

  firebase.initializeApp(authConfig);

  $routeProvider
   .when('/#', {
     templateUrl: 'partials/loginPartial.html',
     controller: 'loginCtrl'
   })
   .when('/new', {
     templateUrl: 'partials/inputWinePartial.html',
     controller: 'inputWineCtrl'
   })
   .when('/library', {
     templateUrl: 'partials/wineLibraryPartial.html',
     controller: 'wineLibraryCtrl'
   })
   .when('/login', {
     templateUrl: 'partials/loginPartial.html',
     controller: 'loginCtrl'
   })
   .when('/logout', {
     templateUrl: 'partials/loginPartial.html',
     controller: 'loginCtrl'
   })
   .when('library/details/:itemId', {
     templateUrl: 'partials/wineViewPartial.html',
     controller: 'wineViewCtrl'
  });
 });




