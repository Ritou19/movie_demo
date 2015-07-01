'use strict';

describe('Filter: urlprofile', function () {

  // load the filter's module
  beforeEach(module('movieDemoApp'));

  // initialize a new instance of the filter before each test
  var urlprofile;
  beforeEach(inject(function ($filter) {
    urlprofile = $filter('urlprofile');
  }));

  it('should return the input prefixed with "urlprofile filter:"', function () {
    var text = 'angularjs';
    expect(urlprofile(text)).toBe('urlprofile filter: ' + text);
  });

});
