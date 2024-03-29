'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MovieCtrl', function ($scope, $routeParams, MoviesDB, $rootScope,$http) {

    $rootScope.db = MoviesDB;

    
    $http.get('http://amc.ig.he-arc.ch:3003/movie/' + $routeParams.id + '?append_to_response=similar,release,credits&language=fr').success(function(data){
             $scope.movie = data;
             $rootScope.bgImage = $scope.movie.backdrop_path;
             $scope.moviesSimilar = $scope.movie.similar.results;
             $scope.listActeurs = $scope.movie.credits.cast;
             $scope.rating = $scope.movie.vote_average / 2;
             $scope.voteCount = $scope.movie.vote_count;

    });
    
    



    
    




  });
