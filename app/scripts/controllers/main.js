'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MainCtrl', function ($scope, MoviesDB) {

  	$scope.listFilm = MoviesDB.getMovies();

//	Incrémenter la liste par des nombres	
//	for(var i=0; i<100; i++) {
//	 $scope.awesomeThings.push('Titre '+ (i+1));
//	};
	
	$scope.MoviesDB = MoviesDB;
    $scope.nbAffiche=10;
	$scope.debut=0;
	$scope.active = true;
	
	$scope.monClick = function(){
		
		MoviesDB.addFilm($scope.titreFilm, $scope.descriptionFilm);
		$scope.titreFilm = '';
		$scope.descriptionFilm = '';
	
	}; 
	
	
	
	$scope.supprimerFilm = function(film) {
		MoviesDB.remove(film);
	};

	 

  });
