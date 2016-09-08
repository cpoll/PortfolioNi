'use strict';

/**
 * @ngdoc function
 * @name portfolioNiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioNiApp
 */
angular.module('appControllers', ['appData'])
.controller('MainCtrl', ['$scope', '$http', 'photoData', function ($scope, $http, photoData) {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    
    $scope.getPhotos = function(){
        return photoData.getData();
    };

    $scope.getCurrentCategory = function(){
        return photoData.getCurrentCategory();
    };

    $scope.switchCategory = function(category, scrollToTop){
        photoData.switchCategory(category);
        if(scrollToTop)
        {
            window.scrollTo(0,0);
        }
    };
}]);
