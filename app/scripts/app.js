'use strict';

/**
 * @ngdoc overview
 * @name movieDemoApp
 * @description
 * # movieDemoApp
 *
 * Main module of the application.
 */
angular
  .module('movieDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'slick',
    'ngFlag'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/filmspop', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/film/:id',{
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
      })
      .when('/acteur/:id',{
        templateUrl: 'views/acteur.html',
        controller: 'ActeurCtrl',
      })
      .when('/acteurspop',{
        templateUrl: 'views/acteurspop.html',
        controller: 'ActeurspopCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('ngFlag', []).
  directive('flag', function() {
    return {
      restrict: 'E',
      replace: true,
      template: '<span class="f{{ size }}"><span class="flag {{ country }}"></span></span>',
      scope: {
        country: '@',
        size: '@'
      },
      link: function(scope, elm, attrs) {
        // Default flag size
        scope.size = 16;

        scope.$watch('country', function(value) {
          scope.country = angular.lowercase(value);
        });

        scope.$watch('size', function(value) {
          scope.size = value;
        });
      }
    };
  });