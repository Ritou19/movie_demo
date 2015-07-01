'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('HomeCtrl', function ($scope,$rootScope) {
    $rootScope.bgImage = null;
  });
