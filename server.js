require('dotenv').config();
const express = require("express"),
LocalStrategy = require("passport-local"),
  bodyParser = require('body-parser'),
  articles = require('./routes/articles'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  user = require('./routes/user'),
  User = require('./models/User');
  cors = require('cors');

const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//MongoDB environmental veriables
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/NYT-web-scrapperDB";
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

//SETUP APP TO USE PACKAGES
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// app.use(flash());
app.use(cors());

//PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "god is good",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//Track the current user
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  // res.locals.info = req.flash("info");
  // res.locals.error = req.flash("error");
  // res.locals.success = req.flash("success");
  next();
});

//Set up app to use routes
app.use(articles);
app.use(user);

// App PORT setting
const PORT = process.env.PORT || 3001;
// Application server.
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
