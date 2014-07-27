'use strict';

var cercaniasControllers = angular.module('cercaniasControllers', []);

cercaniasControllers.controller('RouteListCtrl', ["$scope", "CercaniasAPI",
    function($scope, CercaniasAPI) {
        CercaniasAPI.query(function (result) {
            $scope.routes = result.routes;
        });
    }
]);

cercaniasControllers.controller('TimetableFromCtrl', ['$scope', '$routeParams', 'CercaniasAPI',
    function($scope, $routeParams, CercaniasAPI) {
        CercaniasAPI.get({routeId: $routeParams.routeId}, function (route) {
            $scope.name = route.name;
            $scope.id = route.id;
            $scope.stations = route.stations;
        });
    }
]);
