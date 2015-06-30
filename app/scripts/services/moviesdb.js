'use strict';

/**
 * @ngdoc service
 * @name movieDemoApp.MoviesDB
 * @description
 * # MoviesDB
 * Factory in the movieDemoApp.
 */
angular.module('movieDemoApp')
  .factory('MoviesDB', function ($http) {
    // Service logic
    // ...
	
    var listFilm = [];
    var listDetail = [];
      	var listFilmJSON = localStorage.getItem('listFilm');
	 	listFilm = JSON.parse(listFilmJSON);

    $http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr')
    .success(function(data){
    	listFilm = data.results;
    })
    


	
    // Public API here
    return {
      imgURL: 'http://image.tmdb.org/t/p/',
      getMovies: function() {

        return listFilm;
      },
          
    };
  });
