const userController = require('../controllers/user.controllers'),
    testValidator = require('../validators/user.validators'),
    passport = require('passport');

module.exports = (app, version) => {
    let moduleName = '/auth';

    app.post(
        version + moduleName + "/login",
        passport.authenticate("local"),
        userController.login
    );
    app.post(
        version + moduleName + "/register",
        userController.register
    )

};
