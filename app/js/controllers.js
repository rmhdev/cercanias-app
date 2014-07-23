'use strict';

var cercaniasControllers = angular.module('cercaniasControllers', []);

cercaniasControllers.controller('RouteListCtrl', ["$scope", "$http",
    function($scope, $http) {
        $http.get("data/routes.json").success(function(data) {
            $scope.routes = data.routes;
        });
    }
]);

cercaniasControllers.controller('TimetableFromCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get("data/route-stations.json").success(function(data) {
            $scope.name = data.name;
            $scope.id = data.id;
            $scope.stations = data.stations;
        });
    }
]);
