const Response = require('../../../configuration/config.response'),
    jwt = require("jwt-simple");

const testController = async (req, res, next) => {
    try {
        return Response.sendResponse(res, {
            msg: '100',
            data: {
                message: "this is that data"
            },
            lang: req.params.lang
        });
        return next({ msg: 102 })
        return res.json({
            data: "data is here"
        });
    } catch (err) {
        console.log(err);
        res.json({
            data: "error is here"
        });
    }
}

const login = function (req, res) {
    console.log("Logged In");
    User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        console.log("Error Happened In auth /token Route");
      } else {
        var payload = {
          id: user.id,
          expire: Date.now() + 1000 * 60 * 60 * 24 * 7, //7 days
        };
        var token = jwt.encode(payload, config.jwtSecret);
        res.json({
          token: token,
        });
      }
    });
  };
  const register = function (req, res) {
    User.register(
      new User({ name: req.body.name, username: req.body.username }),
      req.body.password,
      function (err, msg) {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successful" });
        }
      }
    );
  };

module.exports = {
    login,
    register
};