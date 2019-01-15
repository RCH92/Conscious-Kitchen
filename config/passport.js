
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');


var db = require('../models/register.js');

module.exports = function(passport) {
    passport.use("local-signin", 
        new LocalStrategy((username, password, done) =>{
            // finding user
            console.log("in step 1")
            db.User.findOne({ where: { username: username  } })
            .then(function(dbuser) {
                console.log('in step 2')
                if(!dbuser){
                    console.log("user not found!!!!!!!!!!!!!!!!!!!!!!")
                    return done(null, false, {message: "user not found!"});
                }
                // match passwords
                bcrypt.compare(password, dbuser.password, (err, isMatch) => {
                    if(err) throw err;

                    if(isMatch){
                        return done(null, dbuser);
                    }else{
                        console.log("password wrong!!!!!!!!!!!!!!!!!!!!!!");
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