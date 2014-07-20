'use strict';

var cercaniasApp = angular.module('cercaniasApp', []);

cercaniasApp.controller('RouteListCtrl', ["$scope", "$http",
    function($scope, $http) {
        $http.get("data/routes.json").success(function(data) {
            $scope.routes = data.routes;
        });
    }
]);
