'use strict';

/**
 * @ngdoc filter
 * @name movieDemoApp.filter:URLPoster
 * @function
 * @description
 * # URLPoster
 * Filter in the movieDemoApp.
 */
angular.module('movieDemoApp')
  .filter('URLPoster', function (MoviesDB) {
    return function (posterURL) {
      if (posterURL){
        return 'http://image.tmdb.org/t/p/w185' + posterURL;
      }
      return '/images/noposter.png';

    };
  });
