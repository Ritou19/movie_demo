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

    $http.get('http://amc.ig.he-arc.ch:3003/person/' + $routeParams.id+'?language=fr').success(function(data){
             $scope.acteur = data;
             

    });

    $http.get('http://amc.ig.he-arc.ch:3003/person/' + $routeParams.id + '/movie_credits?language=fr').success(function(data){
             $scope.acteurDetail = data;
             $scope.listFilm = $scope.acteurDetail.cast;

    });

  });
