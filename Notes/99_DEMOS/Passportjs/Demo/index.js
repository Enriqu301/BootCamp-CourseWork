const express = require("express")
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

const dbConfig = require("./config");

let { authInfo, url, db } = dbConfig.conn;

let connection = `${url}/${db}`

app.get("/", function(req,res){
    res.render("home.ejs")
})

app.get("/newsfeed", function(req,res){
    res.render("newsfeed.ejs")
})

app.listen(3000, function(){
    console.log("app is running on port 3000.");
});
