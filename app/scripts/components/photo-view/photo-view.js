'use strict';

function PhotoViewCtrl(photoDataService) {
    
    this.photoDataService = photoDataService;

    this.switchCategory = function switchCategory(category, scrollToTop){
        photoDataService.switchCategory(category);
        if(scrollToTop)
        {
            window.scrollTo(0,0);
        }
    }; 
}
PhotoViewCtrl.$inject = ['photoDataService'];

angular.module('niPhotoView', ['photoData'])
.component('niPhotoView', {
    templateUrl: 'views/photo-view.html',
    controller: PhotoViewCtrl,
    bindings: {}
});