'use strict';

angular.module('photoData', [])
.service('photoDataService', ['$http', '$filter', '$location', '$anchorScroll', function ($http, $filter, $location, $anchorScroll) {
    this.constructor = function() {
        var t = this;
        $http.get('data/photos.json')
        .then(function(result){  
            t.data = result.data;
            t.switchCategory(t.data.categories[0]);
            t.selectedPhoto = t.data.photos;
            t.expanderVisible = false;
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
    };

    this.hideExpander = function hideExpander(){
        this.expanderVisible = false;
        $location.hash('photo-' + this.getCurrentPhotoIndex());
        $anchorScroll();
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