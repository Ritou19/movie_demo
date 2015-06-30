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

    function serealizer (listFilm) {
    	var jsonFilm = JSON.stringify(listFilm);
		localStorage.setItem('listFilm', jsonFilm);
	 };

	
    // Public API here
    return {
      getMovies: function() {
      	var listFilmJSON = localStorage.getItem('listFilm');
	 	listFilm = JSON.parse(listFilmJSON);
        return listFilm;
      },
      addFilm: function (titreFilm, descriptionFilm){
      	listFilm.push({'titre' : titreFilm, 'description': descriptionFilm});
		serealizer(listFilm);
	  },
	  remove: function(film){
	  	var removed = listFilm.splice(listFilm.indexOf(film), 1);
		serealizer(listFilm);
		}
    };
  });
