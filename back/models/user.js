var S = require("sequelize");
var db = require("../db");
const crypto = require("crypto");

class User extends S.Model {}
User.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: S.STRING,
      allowNull: false
    },

    salt: {
      type: S.STRING
    }
  },

  { sequelize: db, modelName: "user" }
);

User.generateSalt = function() {
  return crypto.randomBytes(20).toString("hex");
};

User.prototype.encryptPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};

User.prototype.validatePassword = function(password) {
  const hash = crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
  return this.password === hash;
};

User.addHook("beforeCreate", user => {
  user.salt = User.generateSalt();
  user.password = user.encryptPassword(user.password);
});

// User.hasMany(Favorite);

module.exports = { User };
