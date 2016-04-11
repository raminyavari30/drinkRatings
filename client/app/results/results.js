var app = angular.module('mainApp.results',[]);

app.factory('resultsFactory',function($http,$location){

});

app.controller('resultsController',function($scope,$window,$location,resultsFactory){
  var bar = localStorage.getItem('barInfoObj');
  JSON.parse(bar);

  $scope.barName = bar.name;
  $scope.address = bar.address;
  $scope.phone = bar.phone;
  $scope.menu = bar.menu;
});