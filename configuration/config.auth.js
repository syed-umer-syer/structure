const passport = require("passport"),
    passportJWT = require("passport-jwt"),
    mongoose = require('mongoose'),
    User = mongoose.model("user"),
    ExtractJwt = passportJWT.ExtractJwt,
    Strategy = passportJWT.Strategy,
    params = {
  secretOrKey: 's0m3$3Cret$h0lyC0d3&$',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("jwt")
};

module.exports = function() {
  const strategy = new Strategy(params, function(payload, done) {
    const user = User.findById(payload.id, function(err, user) {
      if (err) {
        return done(new Error("UserNotFound"), null);
      } else if(payload.expire<=Date.now()) {
        return done(new Error("TokenExpired"), null);
      } else{
        return done(null, user);
      }
    });
  });
  passport.use(strategy);
  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", config.jwtSession);
    }
  };
};