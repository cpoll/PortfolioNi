'use strict';

/**
 * @ngdoc function
 * @name portfolioNiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioNiApp
 */
angular.module('appControllers', ['photoData'])
.controller('MainCtrl', ['$scope', '$http', 'photoDataService', function ($scope, $http, photoDataService) {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    
    $scope.getPhotos = function(){
        return photoDataService.getData();
    };

    $scope.getCurrentCategory = function(){
        return photoDataService.getCurrentCategory();
    };

    $scope.switchCategory = function(category, scrollToTop){
        photoData.switchCategory(category);
        if(scrollToTop)
        {
            window.scrollTo(0,0);
        }
    };
}]);
