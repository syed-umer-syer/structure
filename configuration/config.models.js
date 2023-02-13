'use strict';
const glob = require('glob'),
    Logger = require('./logger.winston'),
    modelsPaths = 'modules/**/*.model.js';
Logger.info('Starting Models Load!!!!!!!!!!!!');
glob.sync(modelsPaths).forEach((file) => {
    require(`../${file}`);
    Logger.info(`${file} is loaded`);
});