var express = require("express");
var router = express.Router();
var passport = require("../config/passport");
const { Favorite } = require("../models/favorite");
const { User } = require("../models/user");

function isLogedIn(req, res, next) {
  if (req.isAuthenticated()) {
    res.send(req.user.email);
  } else {
    res.send(false);
  }
}

router.post("/signup", (req, res, next) => {
  User.create(req.body)
    .then(user => res.send(user))
    .catch(err => console.log(err));
});

router.post("/login", function(req, res) {
  passport.authenticate("local", function(err, user, info) {
    if (!user) {
      return res.send(false);
    } else {
      req.logIn(user, function(err) {
        if (err) {
          return res.send(false);
        }
        return res.send(user.email);
      });
    }
  })(req, res);
});

router.get("/me", isLogedIn);

router.get("/users", (req, res) => {
  User.findAll({}).then(users => res.send(users));
});

router.get("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout();
    res.send("");
  }
});

router.post("/addFav", (req, res) => {
  Favorite.create(req.body)
    .then(newFav => newFav.setUser(req.user.id))
    .then(fav => res.send(fav));
});

router.get("/favorites", (req, res) => {
  Favorite.findAll({ where: { userId: req.user.id } }).then(favs =>
    res.send(favs)
  );
});

// router.post("/movies/:imdbID", (req, res) => {
//   console.log(req.params, "entre al back");
//   Favorite.destroy({ where: { id: req.params.imdbID } }).then(delFav =>
//     res.send(delFav)
//   );
// });

module.exports = router;
