'use strict';

describe("Cercanias App", function () {
    browser.get('index.html');

    describe('Homepage', function () {
        it('should have a title', function () {
            expect(browser.getTitle()).toEqual('Cercanias APP');
        });

        it('should have a title in the navigation bar', function () {
            expect(element(by.css('header h1')).getText()).toEqual('Cercanias APP');
        });

        it('should have 12 routes', function () {
            expect(element.all(by.css('ul.routes li')).count()).toBe(12);
        });
    });
});
