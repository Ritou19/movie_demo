'use strict';

describe('Filter: URLPoster', function () {

  // load the filter's module
  beforeEach(module('movieDemoApp'));

  // initialize a new instance of the filter before each test
  var URLPoster;
  beforeEach(inject(function ($filter) {
    URLPoster = $filter('URLPoster');
  }));

  it('should return the input prefixed with "URLPoster filter:"', function () {
    var text = 'angularjs';
    expect(URLPoster(text)).toBe('URLPoster filter: ' + text);
  });

});
