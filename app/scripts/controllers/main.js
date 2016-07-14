'use strict';

/**
 * @ngdoc function
 * @name portfolioNiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioNiApp
 */
angular.module('portfolioNiApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $http.get('data/photos.json')
    .then(function(res){
            $scope.photodata = res.data;
            console.log($scope.photodata);
        });
  });
