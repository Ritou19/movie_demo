'use strict';

describe('Controller: ActeurspopCtrl', function () {

  // load the controller's module
  beforeEach(module('movieDemoApp'));

  var ActeurspopCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActeurspopCtrl = $controller('ActeurspopCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
