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
  	$scope.listFilm = JSON.parse(listFilmJSON);

//	Incrémenter la liste par des nombres	
//	for(var i=0; i<100; i++) {
//	 $scope.awesomeThings.push('Titre '+ (i+1));
//	};
	
    $scope.nbAffiche=10;
	$scope.debut=0;
	
	$scope.monClick = function(){
	
		$scope.listFilm.push({'titre' : $scope.titreFilm, 'description': $scope.descriptionFilm});
		$scope.serealizer($scope.listFilm);
		$scope.titreFilm = '';
		$scope.descriptionFilm = '';
	
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
