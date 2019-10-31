var S = require("sequelize");
var db = require("../db");
var { User } = require("../models/user");

class Favorite extends S.Model {}
Favorite.init(
  {
    imdbID: {
      type: S.STRING,
      allowNull: false
    },
    Title: {
      type: S.STRING,
      allowNull: false
    },
    Poster: {
      type: S.STRING,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "favorite" }
);

Favorite.belongsTo(User);

module.exports = { Favorite };
