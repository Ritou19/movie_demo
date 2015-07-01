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
    'slick'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
