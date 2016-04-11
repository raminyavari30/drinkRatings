var app = angular.module('mainApp.landing',[]);

app.factory('landingFactory',function($http, $location){

  var searchResults = function(barName){
    var barData = {};
    barData.bar = {};
    barData.bar.name = barName;
    return $http({
      method: 'POST',
      url: '/home/search',
      data: barData
    })
    .then(function success(response){
      return response.data;
    }, function error(response){
      reject(response);
    }
  }

  return {
    searchResults: searchResults
  };
});

app.controller('landingController',funtion($scope, $window, $location, landingFactory){

  $scope.searchResults = function() {

    landingFactory.searchResults($scope.searchBoxModel)
      .then(function(data){
        $window.localStorage.setItem('barInfoObj', JSON.stringify(data));
        $location.path('/results');
    })
      .catch(funtion(response){
        $location.path('/addBar/id' + $scope.searchBoxModel);
      })
  }
});

