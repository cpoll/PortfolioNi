'use strict';

angular.module('appData', [])
.service('photoData', ['$http', function ($http) {
    this.constructor = function() {
        var t = this;
        $http.get('data/photos.json')
        .then(function(result){  
            t.data = result.data;
            t.currentCategory = t.data.categories[0];
        });
    };
    this.constructor();

    this.getData = function(){
        return this.data;
    };

    this.getCurrentCategory = function(){
        return this.currentCategory;
    };

    this.switchCategory = function(category){
        this.currentCategory = category;
    };
}]);