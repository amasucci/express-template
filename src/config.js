/* @flow */

var config = {};

config.api = {};
config.api.port = process.env.API_PORT || 3080;
config.api.contextPath = process.env.CONTEXT_PATH || '/api/v1';

module.exports = config;