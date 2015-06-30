'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MovieCtrl', function ($scope, $routeParams, MoviesDB) {
    $scope.id = $routeParams.id;
    
    $scope.listFilm = MoviesDB.getMovies();
    $scope.movie = $scope.listFilm[$scope.id];
  });
