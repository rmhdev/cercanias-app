'use strict';

var cercaniasControllers = angular.module('cercaniasControllers', []);

cercaniasControllers.controller('RouteListCtrl', ["$scope", "Route",
    function($scope, Route) {
        Route.query(function (result) {
            $scope.routes = result.routes;
        });
    }
]);

cercaniasControllers.controller('TimetableFromCtrl', ['$scope', '$routeParams', 'Route',
    function($scope, $routeParams, Route) {
        Route.get({routeId: $routeParams.routeId}, function (route) {
            $scope.name = route.name;
            $scope.id = route.id;
            $scope.stations = route.stations;
        });
    }
]);
