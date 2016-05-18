//Module
var cricMatch = angular.module('cricMatch',['ngRoute','ngResource']);

//Routes
cricMatch.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'pages/form.htm',
    controller:'addController',
    controllerAs:'ac'
  })
  .when('/show',{
    templateUrl:'pages/show.htm',
    controller:'showController',
    controllerAs:'sc'
  })
});

//Controller
cricMatch.controller('addController',['$scope','$resource',function($scope,$resource){

}]);

cricMatch.controller('showController',['$scope','resource',function($scope,$resource){

}]);
