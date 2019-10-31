var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var { User } = require("../models/user");

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      password: "password"
    },
    function(email, password, done) {
      User.findOne({
        where: {
          email: email
        }
      }).then(function(user) {
        if (!user) {
          return done(null, false, {
            message: "Incorrect email."
          });
        } else if (!user.validatePassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }

        return done(null, user);
      });
    }
  )
);

module.exports = passport;
