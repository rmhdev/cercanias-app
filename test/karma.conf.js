"use strict";

module.exports = function(config) {
    config.set({
        "basePath": "../",
        "files": [
            "app/bower_components/angular/angular.js",
            "app/js/**/*.js",
            "test/unit/**/*.js"
        ],
        "autoWatch": true,
        "frameworks": ['jasmine']
    });
};
