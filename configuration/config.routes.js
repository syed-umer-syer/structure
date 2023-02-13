'use strict';
const glob = require('glob'),
    Logger = require('./logger.winston');

module.exports = (app) => {
    Logger.info('loading Routes');
    let routes = 'modules/**/*.routes.js',
        version = '/api',
        language = '/v1/:lang',
        baseUrl = `${version}${language}`;
    glob.sync(routes).forEach((file) => {
        require(`../${file}`)(app, baseUrl);
        Logger.info(`${file} is loaded`);
    });

};