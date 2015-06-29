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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

//	Incrémenter la liste par des nombres	
//	for(var i=0; i<100; i++) {
//	 $scope.awesomeThings.push('Titre '+ (i+1));
//	};
	
    $scope.nbAffiche=10;
	$scope.debut=3;
	
	$scope.monClick = function(){
	
		$scope.awesomeThings.push($scope.nouveauFilm);
		$scope.serealizer($scope.nouveauFilm);
		$scope.nouveauFilm = '';
	
	}; 
	
	$scope.active = true;
	
	$scope.supprimerFilm = function(film) {
		var removed = $scope.awesomeThings.splice($scope.awesomeThings.indexOf(film), 1);
	}

	$scope.serealizer = function (newFilm) {
		var jsonFilm = JSON.stringify(newFilm);
		localStorage.setItem('film1', jsonFilm);
	}

  });
