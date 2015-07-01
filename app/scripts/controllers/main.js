'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MainCtrl', function ($scope, MoviesDB, $rootScope,$http) {

  	

//	Incrémenter la liste par des nombres	
//	for(var i=0; i<100; i++) {
//	 $scope.awesomeThings.push('Titre '+ (i+1));
//	};
	
	$http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr').success(function(data){
    	$scope.listFilmPop = data.results;
    })


//	$scope.MoviesDB = MoviesDB;
    
	$rootScope.bgImage = null;
	
	$scope.monClick = function(){
		
		MoviesDB.addFilm($scope.titreFilm, $scope.descriptionFilm);
		$scope.titreFilm = '';
		$scope.descriptionFilm = '';
	
	}; 
	
	
	
	$scope.supprimerFilm = function(film) {
		MoviesDB.remove(film);
	};

	 
	var myapp = angular.module('myapp', ['ngFlag']);
  });
