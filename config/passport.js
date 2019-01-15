
var LocalStrategy = require('passport-local').Strategy;
var express = require("express");
var bcrypt = require('bcryptjs');
var db = require("../models/register");

// var db = require('../models');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy((username, password, done) =>{
            // finding user
            db.User.findOne({ where: { username: username  } })
            .then(function(dbuser) {
                if(!dbuser){
                    return done(null, false, {message: "user not found!"});
                }
                // match passwords
                bcrypt.compare(password, dbuser.password, (err, isMatch) => {
                    if(err) throw err;

                    if(isMatch){
                        return done(null, dbuser);
                    }else{
                        return done(null, false, {message: "Incorrect password"}); 
                    }
                });
            }).catch(err => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        User.done(null, user.id)
    });
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

}