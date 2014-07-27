'use strict';

module.exports = function(config) {
    config.set({
        'basePath': '../',
        'files': [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-resource/angular-resource.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/js/*.js',
            'test/unit/**/*.js'
        ],
        'exclude' : [
            'app/bower_components/angular/*.min.js',
            'app/bower_components/angular-*/*.min.js',
        ],
        'autoWatch': true,
        'frameworks': ['jasmine'],
        'browsers': ['Chrome'],
        'reporters': ['progress', 'junit'],
        'colors': true,
        'plugins': [
            //'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-jasmine'
        ]
    });
};
