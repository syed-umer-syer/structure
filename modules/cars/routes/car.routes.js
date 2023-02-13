const carController = require('../controllers/car.controller'),
    auth = require('../../../configuration/config.auth')();
//     testValidator = require('../validators/user.validators'),
//     passport = require('passport');
// const userController = require('../controllers/user.controllers'),
//     testValidator = require('../validators/user.validators'),
//     passport = require('passport');

module.exports = (app, version) => {
    let categoryModule = '/category',
        carModule = '/car'

    app.post(
        version + categoryModule,
        auth.authenticate(),
        carController.categoryCreate
    );
    app.put(
        version + categoryModule + '/:id',
    );
    app.get(
        version + categoryModule + ':/id',
    );
    app.get(
        version + categoryModule,
    );
    app.delete(
        version + categoryModule + '/:id',
    );

    //******************************Car Module************************************ */

    app.post(
        version + carModule,
    );
    app.put(
        version + carModule + '/:id',
    );
    app.get(
        version + carModule + ':/id',
    );
    app.get(
        version + carModule,
    );
    app.delete(
        version + carModule + '/:id',
    );

};
