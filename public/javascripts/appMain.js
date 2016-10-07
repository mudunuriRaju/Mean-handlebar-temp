'use strict';

// Declare app level module which depends on views, and components
var Kapp = angular.module('Kapp', [
    'ngRoute',
    'ngAnimate', 'ngCookies', 'ngResource', 'ngAria', 'ngMaterial',
    'Kapp.login',
    //'Kapp.userlist',
    'Kapp.createuser',
    //'Kapp.edituser',

]);
Kapp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/login'});

}]);
