'use strict';

/* jasmine specs for controllers go here */
describe('CercaniasApp controllers', function() {

    describe('RouteListCtrl', function(){
        var scope, ctrl, $httpBackend;

        beforeEach(module('cercaniasApp'));

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/routes.json').
                respond({
                    "routes": [
                        {id: 1, name: 'Route A'},
                        {id: 2, name: 'Route B'},
                        {id: 3, name: 'Route C'}
                    ]
                });

            scope = $rootScope.$new();
            ctrl = $controller('RouteListCtrl', {$scope: scope});
        }));

        it('should create "routes" model with 3 phones', inject(function() {
            expect(scope.routes).toBeUndefined();
            $httpBackend.flush();
            expect(scope.routes.length).toBe(3);
        }));

    });
});
