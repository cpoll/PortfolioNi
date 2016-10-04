'use strict';

function PhotoExpanderCtrl(photoDataService) {
    this.photoDataService = photoDataService;
}
PhotoExpanderCtrl.$inject = ['photoDataService'];

angular.module('niPhotoExpander', ['photoData'])
.component('niPhotoExpander', {
    templateUrl: 'views/photo-expander.html',
    controller: PhotoExpanderCtrl,
    bindings: {}
});