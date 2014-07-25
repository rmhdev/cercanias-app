'use strict';

// Declare app level module which depends on filters, and services

var cercaniasApp = angular.module('cercaniasApp', [
    'ngRoute',
    'cercaniasControllers',
    'cercaniasServices'
]);

cercaniasApp.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/route-list.html',
            controller: 'RouteListCtrl'
        }).
        when('/timetable/:routeId', {
            templateUrl: 'partials/timetable-from.html',
            controller: 'TimetableFromCtrl'
        });
    }
]);
