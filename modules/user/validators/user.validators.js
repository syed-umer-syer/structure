const GlobalLib = require('../../utils/global.utils'),
    Logger = require('../../../configuration/logger.winston'),
    { check, param } = require('express-validator');

let validateTest = async (req, res, next) => {
    try {
        await check('language').notEmpty().withMessage(100).run(req);

        return GlobalLib.ValidateResponse('Initial Testing', req, res, next);
    } catch (err) {
        Logger.error(err);
        return next({ code: 1049 });
    }
};

module.exports = {
    validateTest,
};
