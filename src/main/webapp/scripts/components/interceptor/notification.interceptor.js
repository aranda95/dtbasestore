 'use strict';

angular.module('dtbasestoreApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-dtbasestoreApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-dtbasestoreApp-params')});
                }
                return response;
            }
        };
    });
