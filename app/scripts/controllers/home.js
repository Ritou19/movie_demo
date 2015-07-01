'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('HomeCtrl', function ($scope,$rootScope,$http) {
    $rootScope.bgImage = null;

    $http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr').success(function(data){
    	$scope.listFilmPop = data.results;
    })


    $http.get('http://amc.ig.he-arc.ch:3003/person/popular?language=fr')
    .success(function(data){
    	$scope.listActeurs = data.results;
    })
  });
