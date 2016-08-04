"use strict";

app.factory("WineLibFactory", function (FirebaseURL, $q, $http) {

let getWineList = function() {
    let items = [];
    return $q(function (resolve, reject) {
        $http.get(`${FirebaseURL}/items.json`)
        .success(function(itemObject) { 
            let itemCollection = itemObject;
            console.log("item object", itemObject);
            if (itemObject) { 
                Object.keys(itemCollection).forEach(function(key) {
                    itemCollection[key].id=key;
                    items.push(itemCollection[key]);
                    // console.log("THINGS", itemCollection[key])
                });
            }
            resolve(items);
        })
        .error(function(error) {
            reject(error);
        });
    });
};

let postNewWine = function(newWine) {
   return $q(function(resolve, reject) {
    $http.post(`${FirebaseURL}/items.json`,
        JSON.stringify(newWine))
        .success(function(ObjFromFirebase) {
            resolve(ObjFromFirebase);
        }).error(function (error) {
            reject(error);
        });
    });
};

let deleteWine = function(id) {
    return $q(function(resolve, reject) {
      $http.delete(
        `${FirebaseURL}/items/${id}.json`
      )
      .success(function() {
        resolve();
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

return  { getWineList, postNewWine, deleteWine };

});




