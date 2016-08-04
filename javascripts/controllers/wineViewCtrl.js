// "use strict";

// app.controller("wineViewCtrl", function ($scope, $routeParams, WineLibFactory) {
//   $scope.items = [];
//   $scope.selectedItem = null;

// WineLibFactory.getWineList()
// .then(function(itemCollection) {
//   $scope.items = itemCollection;

//   $scope.selectedItem = $scope.items.filter(function(item) {
//     return item.id === $routeParams.itemId;
//     })[0];
//   });
// });