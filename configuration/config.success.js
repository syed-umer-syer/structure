const glob = require('glob')
    fs = require('fs'),
    _ = require('lodash'),
    Logger = require('./logger.winston');

Logger.info('loading success messages...!!!!');
let path = 'modules/**/*.success.json';

let successMessages = {
    '0000': {
        msg: {
            EN: '',
            AR: '',
        },
    },
};

glob.sync(path).forEach(function (file) {
    _.extend(successMessages, JSON.parse(fs.readFileSync(file, 'utf-8')));
    Logger.info(`success file: ${file} is loaded`);
});

module.exports = successMessages;
