'use strict';

/* Services */
var cercaniasServices = angular.module('cercaniasServices', ['ngResource']);

cercaniasServices.factory('CercaniasAPI', ['$resource',
    function ($resource) {
        return $resource('data/route-:routeId.json', {}, {
            query: { method: 'GET', params: {routeId: 'list'} }
        });
    }
]);
