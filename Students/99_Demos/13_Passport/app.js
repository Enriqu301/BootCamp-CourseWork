const express = require("express");
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
// const passportLocalMongoose = require("passport-local-mongoose");
const UserModel = require("./models/user");

// 1. Build our connection
const dbConfig = require("./config");

// pulls values (sensitive) from a separate file
let { authInfo, url, db } = dbConfig.conn;

// builds our connection route
let connection = `${url}/${db}`;

// creates the connection of index.js with mongodb
mongoose
  .connect(connection, authInfo)
  .then(() => console.log(`Connected to ${db} db.`))
  .catch(err => `Error connecting to ${db} db: ${err}`);

                                                // MIDDLEWARE

// body parser code. I think we only need the urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// session is a server side object which stores information
// about a specific user
app.use(
    require('express-session')({
        secret: "Blah blah blah",  // used to encrypt the user info before saving to db
        resave: false,             // save the session obj even if not changed
        saveUninitialized: false   // save the session obj even if not initialized
    })
)

// creates a passport object and loads it on the app
app.use(passport.initialize());
// creates a session object without a user
app.use(passport.session());
// provides passport object the functions to enable authentication using local strategy
passport.use(new LocalStrategy(UserModel.authenticate()));
// provides passport object the functions to ..
// convert user information into a form that is stored in the db
passport.serializeUser(UserModel.serializeUser());
// provides passport object the functions to ..
// get the user info from the db
passport.deserializeUser(UserModel.deserializeUser());

                                                // MIDDLEWARE ENDS

                                                // ROUTE HANDLERS

// displays the sign up form
app.get('/signup', function(req, res){
    res.render("signup.ejs", {err: false})
});

// handles the sign up POST
// 1. signup
// 2. authenticate
// 3. redirect to the protected info (/newsfeed)
app.post('/signup', function(req, res){
    let newUser = new UserModel({username: req.body.username})
    // create user in the db
    UserModel.register(newUser, req.body.password, function(err, user){
      if(err) {
        console.log(err)
        res.render('signup.ejs', {err: "User already exists"})
      } else {
        passport.authenticate("local")(req, res, function(){
          // at this point user has authenticated and may be
          // allowed to access the newfeed
          res.redirect('/newsfeed')
        })
      }
    })
})

// process the request to the login page
app.get('/login', function(req, res){
    res.render('login.ejs', {err: req.query.err || false})
})

// process the login info sent by login form on the browser
// sent as urlencoded info.
app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/newsfeed',
        failureRedirect: '/login?err=Username%2Fpassword%20incorrect'
    }), 
    // we don't need anything here in our cb function
    // however it is required per the documentation
    function(req, res){}
)

// process the logout request where the browser
// has clicked on /logout a link
app.get('/logout', function(req, res){
    req.logout(function(){
        console.log('user logged out')
    })
    res.redirect('/');
})

// process the request to load the home page
app.get("/", function(req, res) {
    res.render("home.ejs", { user: req.user && req.user.username || false});
});

// process the request to load the newsfeed page
app.get(
    "/newsfeed", 
    function(req, res) {
        res.render("newsfeed.ejs", {user: req.user && req.user.username || false});
});

                                                // ROUTE HANDLERS END

// start the app and keep listening on port 3000
app.listen(3000, function(){
    console.log("App is running on port 3000.");
});

