'use strict';

/**
 * @ngdoc filter
 * @name movieDemoApp.filter:urlprofile
 * @function
 * @description
 * # urlprofile
 * Filter in the movieDemoApp.
 */
angular.module('movieDemoApp')
  .filter('urlprofile', function () {
    return function (profileurl) {
      if (profileurl){
        return 'http://image.tmdb.org/t/p/w185' + profileurl;
      }
      return '/images/noprofile.gif';

    };
  });
