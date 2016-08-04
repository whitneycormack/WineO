"use strict";
  
app.controller("inputWineCtrl", function ($scope, $location, WineLibFactory) {
  $scope.newWine = {
    Name: "",
    Vineyard: "",
    Region: "", 
    Varietal: "",
    Year: "", 
    Notes: ""
  };
  
    $scope.addNewWine = function() {
      console.log("added new wine", $scope.newWine);
      WineLibFactory.postNewWine($scope.newWine)
     .then(function (response) {
        $location.url("/library");
     });
    };
});

