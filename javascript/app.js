//Module
var cricMatch = angular.module('cricMatch',['ngRoute','ngResource','firebase']);

//Routes
cricMatch.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'pages/form.htm',
    controller:'addController',
    controllerAs:'ac'
  });
});

//Controller
cricMatch.controller('addController',['$scope', '$firebaseArray', '$resource',function($scope, $firebaseArray, $resource){
  var vm = this;
  var ref = new Firebase('https://cricmatch.firebaseio.com/Matches');
  vm.matchData = $firebaseArray(ref);

  function Match (){
    this.teamA = '';
    this.teamB = '';
    this.venue = '';
    this.date = '';
  }

  vm.newMatch = new Match();

  vm.addMatch = function(){
    vm.matchData.$add(vm.newMatch);
    vm.newMatch = new Match();
  }
  console.log(vm.matchData);
}]);
