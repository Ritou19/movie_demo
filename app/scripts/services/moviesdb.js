'use strict';

/**
 * @ngdoc service
 * @name movieDemoApp.MoviesDB
 * @description
 * # MoviesDB
 * Factory in the movieDemoApp.
 */
angular.module('movieDemoApp')
  .factory('MoviesDB', function () {
    // Service logic
    // ...

    var listFilm = [];

   
	

	

    // Public API here
    return {
      getMovies: function() {
        return listFilm;
      }
    };
  });
