const glob = require('glob'),
    fs = require('fs'),
    _ = require('lodash'),
    Logger = require('./logger.winston');

Logger.info('Loading Errors....!!!!');
let route = 'modules/**/*.errors.json';

let errorInitialized = {
    '1': {
        'msg': {
            'EN': '',
            'AR': ''
        }
    },
};

glob.sync(route).forEach(function(file) {
    _.extend(errorInitialized, JSON.parse(fs.readFileSync(file, 'utf-8')));
    Logger.info(`error file: ${file} is loaded`);
});

module.exports = errorInitialized;