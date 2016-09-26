'use strict';

function PhotoViewCtrl($scope, $http, photoDataService) {
    
    this.photoDataService = photoDataService;

    this.switchCategory = function switchCategory(category, scrollToTop){
        photoDataService.switchCategory(category);
        if(scrollToTop)
        {
            window.scrollTo(0,0);
        }
    }; 


    /*
    .controller('PhotoViewCtrl', ['$scope', '$http', 'photoDataService', function PhotoViewCtrl($scope, $http, photoDataService) {
    
    this.photoDataService = photoDataService;

    this.switchCategory = function switchCategory(category, scrollToTop){
        photoDataService.switchCategory(category);
        if(scrollToTop)
        {
            window.scrollTo(0,0);
        }
    };
    }])
    */
}
PhotoViewCtrl.$inject = ['$scope', '$http', 'photoDataService'];

angular.module('niPhotoView', ['photoData'])
.component('niPhotoView', {
    templateUrl: 'views/photo-view.html',
    controller: PhotoViewCtrl,
    /*controller: ['$scope', '$http', 'photoDataService', function PhotoViewCtrl($scope, $http, photoDataService) {
        this.photoDataService = photoDataService;

        this.switchCategory = function switchCategory(category, scrollToTop){
            photoDataService.switchCategory(category);
            if(scrollToTop)
            {
                window.scrollTo(0,0);
            }
        };
    }],*/
    bindings: {}
});