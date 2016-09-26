'use strict';

/**
 * @ngdoc overview
 * @name portfolioNiApp
 * @description
 * # portfolioNiApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioNiApp', [
    'photoData',
    'appControllers',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'wu.masonry',
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
