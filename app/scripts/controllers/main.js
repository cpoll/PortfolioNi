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
    
    $scope.photoDataService = photoDataService;

    $scope.switchCategory = function switchCategory(category, scrollToTop){
        photoDataService.switchCategory(category);
        if(scrollToTop)
        {
            window.scrollTo(0,0);
        }
    };
}]);
