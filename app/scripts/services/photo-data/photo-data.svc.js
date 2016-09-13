'use strict';

angular.module('photoData', [])
.service('photoDataService', ['$http', function ($http) {
    this.constructor = function() {
        var t = this;
        $http.get('data/photos.json')
        .then(function(result){  
            t.data = result.data;
            t.currentCategory = t.data.categories[0];
        });
    };
    this.constructor();

    this.switchCategory = function switchCategory(category){
        this.currentCategory = category;
    };
}]);