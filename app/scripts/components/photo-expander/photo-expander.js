'use strict';

function PhotoExpanderCtrl(photoDataService) {
    
    this.photoDataService = photoDataService;

    this.switchCategory = function switchCategory(category, scrollToTop){
        photoDataService.switchCategory(category);
        if(scrollToTop)
        {
            window.scrollTo(0,0);
        }
    }; 
}
PhotoExpanderCtrl.$inject = ['photoDataService'];

angular.module('niPhotoExpander', ['photoData'])
.component('niPhotoExpander', {
    templateUrl: 'views/photo-expander.html',
    controller: PhotoExpanderCtrl,
    bindings: {}
});