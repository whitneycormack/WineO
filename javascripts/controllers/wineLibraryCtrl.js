"use strict"

app.controller("wineLibraryCtrl", function($scope, WineLibFactory){
    WineLibFactory.getWineList()
    .then(function (itemCollection) {
    $scope.items = itemCollection;
    console.log('WHAT UP', itemCollection);
    // console.log("itemCollection", itemCollection);
  });


$scope.delete = function (id) {
    console.log("id: ", id);
    WineLibFactory.deleteItem(id)
    .then(function() {
      console.log("deleted");
      WineLibFactory.getItemList()
      .then(function(itemCollection) {
        console.log("item collection", itemCollection);
        $scope.items = itemCollection;
      });
    });
  };
});
