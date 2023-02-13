const express = require('express'),
    cors = require('cors'),
    helmet = require('helmet'),
    http = require('http'),
    morganMiddleware = require("./logger.morgan"),
    logger = require("./logger.winston"),
    { initialConfiguration } = require('./config.environment'),

    mongoose = require("mongoose"),
    passport = require("passport"),
    localStrategy = require("passport-local");



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(helmet());


// Add the morgan middleware
app.use(morganMiddleware);
const options = {
    "origin": "*",
    "methods": "GET,PUT,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200,
    "exposedHeaders": "Access-Control-Allow-Method,Access-Control-Allow-Origin,Content-Type,Content-Length"
};

app.use(express.json({ limit: '50mb' }));

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.raw({ type: 'application/vnd.custom-type' }))
app.use(express.text({ type: 'text/html' }))

app.use(cors(options));

initialConfiguration();
require('./config.mongoose')
global.errors = require('./config.errors');
global.successMessages = require('./config.success');
require('./config.errorHandler')(app);

// passport
setTimeout(Auth, 5000);
function Auth()  {
    const auth = require('./config.auth')(),
            User = mongoose.model("user");
        require('./config.routes')(app);
        app.use(auth.initialize());
        passport.use(new localStrategy(User.authenticate()));
        app.use(passport.initialize());
        app.use(passport.session());
        passport.serializeUser(User.serializeUser());
        passport.deserializeUser(User.deserializeUser());
}

const portNormalization = (val) => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};


const whenError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const binding = typeof global.port === 'string' ?
        'Pipe ' + global.port :
        'Port ' + global.port;

    switch (error.code) {
        case 'EACCES': {
            console.error(`${binding} requires elevated privileges`);
            process.exit(1);
            break;
        }
        case 'EADDRINUSE': {
            console.error(`${binding} is already in use`);
            process.exit(1);
            break;
        }
        default: {

            throw error;
        }
    }
};


const OnListen = () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    logger.info(`Server is listening on ${bind}`);
};
const server = http.createServer(app);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    global.port = portNormalization(config.PORT ? `${config.PORT}${process.env.NODE_APP_INSTANCE}` : '3000');
} else {
    global.port = portNormalization(config.PORT || '3000');
}

server.listen(global.port);
server.on('error', whenError);
server.on('listening', OnListen);

server.setTimeout(500000);

