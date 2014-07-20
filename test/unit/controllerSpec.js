'use strict';

/* jasmine specs for controllers go here */
describe('CercaniasApp controllers', function() {

    describe('RouteListCtrl', function(){

        beforeEach(module('cercaniasApp'));

        it('should create "routes" model with 12 phones', inject(function($controller) {
            var scope = {},
                ctrl = $controller('RouteListCtrl', {$scope:scope});

            expect(scope.routes.length).toBe(12);
        }));

    });
});
