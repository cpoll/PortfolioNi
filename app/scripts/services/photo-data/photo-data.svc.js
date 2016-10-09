'use strict';

angular.module('photoData', [])
.service('photoDataService', ['$http', '$filter', '$rootScope', function ($http, $filter, $rootScope) {
    this.constructor = function() {
        var t = this;
        $http.get('data/photos.json')
        .then(function(result){  
            t.data = result.data;
            t.switchCategory(t.data.categories[0]);
            t.selectedPhoto = t.data.photos;
            t.expanderVisible = false;
            $rootScope.bodyOverflowHidden = false;
        });
    };
    this.constructor();

    this.switchCategory = function switchCategory(category){
        this.currentCategory = category;
        this.photosInCategory = $filter('filter')(this.data.photos, {category:this.currentCategory});
        console.log(this.photosInCategory);
    };

    this.switchPhoto = function switchPhoto(photo){
        this.selectedPhoto = photo;
        this.expanderVisible = true;
        $rootScope.bodyOverflowHidden = true;
    };

    this.hideExpander = function hideExpander(){
        this.expanderVisible = false;
        $rootScope.bodyOverflowHidden = false;

        //Scroll to the last-seen photo.
        const hash = 'photo-' + this.getCurrentPhotoIndex();
        // $location.hash(hash); $anchorScroll(); isn't playing nicely, so we're doing the non-angular way for now
        // See also: http://stackoverflow.com/questions/29526187/anchorscroll-and-location-only-work-after-second-try
        document.getElementById(hash).scrollIntoView();
    };

    this.nextPhoto = function nextPhoto(){
        let newPhotoIndex = this.getCurrentPhotoIndex() + 1;
        if(newPhotoIndex >= this.photosInCategory.length) { 
            newPhotoIndex = 0; 
        }
        this.switchPhoto(this.photosInCategory[newPhotoIndex]);
    };

    this.previousPhoto = function previousPhoto(){
        let newPhotoIndex = this.getCurrentPhotoIndex() - 1;
        if(newPhotoIndex < 0) { 
            newPhotoIndex = this.photosInCategory.length - 1; 
        }
        this.switchPhoto(this.photosInCategory[newPhotoIndex]);
    };


    //Private
    this.getCurrentPhotoIndex = function getCurrentPhotoIndex() {
        return this.photosInCategory.indexOf(this.selectedPhoto);
    };

}]);