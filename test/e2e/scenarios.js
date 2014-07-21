'use strict';

describe("Cercanias App", function () {
    browser.get('index.html');

    describe('Homepage', function () {
        it('should have 12 routes', function () {
            expect(element.all(by.css('ul.routes li')).count()).toBe(12);
        });
    });
});
