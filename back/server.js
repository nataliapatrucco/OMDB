var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var routes = require("./routes/index");
var path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("./config/passport");
var nunjucks = require("nunjucks");
var db = require("./db");
var morgan = require("morgan");

// // templating boilerplate setup
app.engine("html", nunjucks.render); // como renderear templates html
app.set("view engine", "html"); // que extensiones de archivo tienen los templates
nunjucks.configure("views", { noCache: true }); // donde encontrar las views

app.use(cookieParser());

// // body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // para HTML form submits
app.use(bodyParser.json()); // seria para AJAX requests

app.use(express.static(path.join(__dirname, "/public")));
app.use(
  session({
    secret: "omdb",
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", routes);

app.get("/*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// comienza el servidor

db.sync({ force: false }).then(() => {
  app.listen(3000, function() {
    console.log("listening on port 3000");
  });
});

module.exports = app;
