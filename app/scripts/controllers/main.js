'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MainCtrl', function ($scope) {
  	var listFilmJSON = localStorage.getItem('listFilm');
  	var listFilm = JSON.parse(listFilmJSON);
    $scope.listFilm = listFilm;

//	Incrémenter la liste par des nombres	
//	for(var i=0; i<100; i++) {
//	 $scope.awesomeThings.push('Titre '+ (i+1));
//	};
	
    $scope.nbAffiche=10;
	$scope.debut=0;
	
	$scope.monClick = function(){
	
		$scope.listFilm.push($scope.nouveauFilm);
		$scope.serealizer($scope.listFilm);
		$scope.nouveauFilm = '';
	
	}; 
	
	$scope.active = true;
	
	$scope.supprimerFilm = function(film) {
		var removed = $scope.listFilm.splice($scope.listFilm.indexOf(film), 1);
		$scope.serealizer($scope.listFilm);
	}

	$scope.serealizer = function (listFilm) {
		var jsonFilm = JSON.stringify(listFilm);
		localStorage.setItem('listFilm', jsonFilm);
	}

  });
