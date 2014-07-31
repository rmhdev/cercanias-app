'use strict';

/* jasmine specs for controllers go here */
describe('CercaniasApp controllers', function() {

    describe('RouteListCtrl', function(){
        var scope, ctrl, $httpBackend;

        beforeEach(module('cercaniasApp'));

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/route-list.json').
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

        it('should create "routes" model with 3 routes', inject(function() {
            expect(scope.routes).toBeUndefined();
            $httpBackend.flush();
            expect(scope.routes.length).toBe(3);
        }));
    });

    describe('TimetableFromCtrl simple', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(module('cercaniasApp'));

        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/route-20.json').
                respond({
                    "id": "20",
                    "name": "Asturias",
                    "url": "http://localhost:8888/route/20",
                    "stations": [
                        {
                            "id": "15205",
                            "name": "Ablaña",
                            "route_id": "20"
                        },
                        {
                            "id": "16403",
                            "name": "Aviles",
                            "route_id": "20"
                        },
                        {
                            "id": "16006",
                            "name": "Barros",
                            "route_id": "20"
                        }
                    ]
                });

            $routeParams.routeId = "20";
            scope = $rootScope.$new();
            ctrl = $controller('TimetableFromCtrl', {$scope: scope});
        }));

        it('should show the name of the route', inject(function() {
            expect(scope.routes).toBeUndefined();
            $httpBackend.flush();
            expect(scope.name).toBe("Asturias");
            expect(scope.id).toBe("20");
            expect(scope.stations.length).toBe(3);
        }));
    });

    describe('TimetableToCtrl complex', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(module('cercaniasApp'));

        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/route-20.json').
                respond({
                    "id": "20",
                    "name": "Asturias",
                    "url": "http://localhost:8888/route/20",
                    "stations": [
                        {
                            "id": "15205",
                            "name": "Ablaña",
                            "route_id": "20"
                        },
                        {
                            "id": "16403",
                            "name": "Aviles",
                            "route_id": "20"
                        },
                        {
                            "id": "16006",
                            "name": "Barros",
                            "route_id": "20"
                        }
                    ]
                });

            $routeParams.routeId = "20";
            $routeParams.fromId = "15205";
            scope = $rootScope.$new();
            ctrl = $controller('TimetableToCtrl', {$scope: scope});
        }));

        it('should have the info of the departure station', inject(function() {
            expect(scope.from).toBeUndefined();
            $httpBackend.flush();
            expect(scope.from.id).toBe("15205");
            expect(scope.from.name).toBe("Ablaña");
            expect(scope.from.route_id).toBe("20");
        }));

    });

});
