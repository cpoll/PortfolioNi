'use strict';

describe('Photo Data Service', function () {

  // load the controller's module
  beforeEach(module('appData'));

  var photoDataService;
  var rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, photoData, $httpBackend) {
    //$httpBackend.whenGET(/.*/).passThrough();

    photoDataService = photoData;
    $httpBackend.expectGET('data/photos.json');
    $httpBackend.whenGET('data/photos.json').passThrough();
    photoDataService.constructor();
    console.log($httpBackend);
    $rootScope.$apply();
  }));

  it('should load the photo data', function () {
    //rootScope.$appy()
    expect(photoDataService.data).toBe(3);
  });
});
