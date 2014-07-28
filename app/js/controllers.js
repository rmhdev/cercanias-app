'use strict';

var cercaniasControllers = angular.module('cercaniasControllers', []);

cercaniasControllers.controller('RouteListCtrl', ["$scope", "RoutesAPI",
    function($scope, RoutesAPI) {
        RoutesAPI.query(function (result) {
            $scope.routes = result.routes;
        });
    }
]);

cercaniasControllers.controller('TimetableFromCtrl', ['$scope', '$routeParams', 'RoutesAPI',
    function($scope, $routeParams, RoutesAPI) {
        RoutesAPI.get({routeId: $routeParams.routeId}, function (route) {
            $scope.name = route.name;
            $scope.id = route.id;
            $scope.stations = route.stations;
        });
    }
]);

cercaniasControllers.controller('TimetableToCtrl', ['$scope', '$routeParams', 'RoutesAPI'],
    function ($scope, $routeParams, RoutesAPI) {

    }
);
