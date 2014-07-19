"use strict";

describe("RouteListCtrl", function () {
    it("it should create a list of 12 routes", function() {
        var scope = {},
            ctrl = new RouteListCrtl(scope);

        expect(scope.routes.length).toBe(12);
    });
});
