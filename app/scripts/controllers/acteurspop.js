'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:ActeurspopCtrl
 * @description
 * # ActeurspopCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('ActeurspopCtrl', function ($scope,$http, $rootScope) {
    
    $rootScope.bgImage = null;
    
    $http.get('http://amc.ig.he-arc.ch:3003/person/popular?language=fr')
    .success(function(data){
    	$scope.listActeurs = data.results;
    })
    

  });
