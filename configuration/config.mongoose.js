const mongoose = require('mongoose'),
    Logger = require('./logger.winston');

Logger.info(`Establishing connection to: ${config.mongoConnection.connectionString}`);

mongoose.connect(config.mongoConnection.connectionString, {
    keepAlive: true,
    useNewUrlParser: true,
})
.then(res => {
    Logger.info(`database connected to ${config.mongoConnection.db_name} 
    @Host: ${config.mongoConnection.db_host}`);
    require('./config.models');
})
.catch((err) => {
    Logger.error(`exception: Error occured while establishing connection to db: ${err}`);
    throw {
        message:`exception: Error occured while establishing connection to db: ${err}`
    }
});
Logger.info(`Mongoose readyState Status: ${mongoose.connection.readyState}`)
if (mongoose.connection.readyState == 1) {
    Logger.info(`database connected to ${config.mongoConnection.db_name} 
    @Host: ${config.mongoConnection.db_host}`);
    // require('./config.models');
}
mongoose.connection.on('connected', function () {
    Logger.info(`database connected to ${config.mongoConnection.db_name} 
    @Host: ${config.mongoConnection.db_host}`);
    require('./config.models');
});

mongoose.connection.on('error', function (err) {
    Logger.error(`Error occured while establishing connection to db: ${err.message}`);
    throw {
        message:`Error occured while establishing connection to db: ${err.message}`
    }
});

mongoose.connection.on('disconnected', function () {
    Logger.error(`DataBase connection to @Host: ${config.mongoConnection.db_host} is disconnected `);
    throw {
        message:`DataBase connection to @Host: ${config.mongoConnection.db_host} is disconnected `
    }
});