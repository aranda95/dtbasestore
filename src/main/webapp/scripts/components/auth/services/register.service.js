'use strict';

angular.module('dtbasestoreApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


