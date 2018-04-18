"use strict";
// This  file contains list of all the api this angular application uses.
// This file also documenting how to use the api
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environments/environment");
exports.ServerUrl = environment_1.environment.apiURL;
exports.LogApi = {
    restUrl: { url: function () { return exports.ServerUrl + '/api/logs'; } },
};
exports.UserApi = {
    login: {
        url: function () { return exports.ServerUrl + '/api/users/login'; },
        method: 'POST'
    },
    register: {
        url: function () { return exports.ServerUrl + '/api/users'; },
        method: 'POST'
    },
    changePassword: {
        url: function () { return exports.ServerUrl + '/api/users/change-password'; },
        method: 'POST'
    },
    resetPassword: {
        url: function () { return exports.ServerUrl + '/api/users/reset-password'; },
        method: 'POST'
    },
    sendResetPasswordToken: {
        url: function () { return exports.ServerUrl + '/api/users/reset'; },
        method: 'GET'
    },
    logout: {
        url: function () { return exports.ServerUrl + '/api/users/logout'; },
        method: 'POST'
    }
};
exports.ThinaerApi = {
    getApp: {
        url: exports.ServerUrl + '/applications',
        method: 'GET'
    },
    getToken: {
        url: 'https://sonar-test.auth.us-west-2.amazoncognito.com/oauth2/token'
    }
};
