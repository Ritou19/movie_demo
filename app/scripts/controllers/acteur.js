'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:ActeurCtrl
 * @description
 * # ActeurCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('ActeurCtrl', function ($scope, $rootScope, $http, $routeParams) {
    $rootScope.bgImage = null;

    $http.get('http://amc.ig.he-arc.ch:3003/person/' + $routeParams.id).success(function(data){
             $scope.acteur = data;
             

    });

    $http.get('http://amc.ig.he-arc.ch:3003/person/' + $routeParams.id + '/movie_credits').success(function(data){
             $scope.listFilm = $scope.acteur.cast;

    });
    
  });