
var db = require("../models");
var passport = require('passport');
var bcrypt = require('bcryptjs');
var user= {};
// routes
module.exports = function(app){
// POST route to add new user
app.post("/user/register", function(req, res) {
    // before we register, validate password match and form requirements. Sequelize will do the rest of our validation.
    // this is required because I am asking for 2 passwords but will only use one for the DB.
    // because of this, there is no validation in place for the second password field in my model.
    // I also realize I could easily write a custom validation for this and still utilize the model validation...

   var { name, email, password, password2 } = req.body;
   var errors = [];
   
    //enforce field requirement
   if ( !name || !email || !password || !password2 ) {
       errors.push({msg: "Please answer all fields"});
        var modal = true;
   };

    //password match
    if(password !== password2){
        errors.push({msg: "Passwords do not match"});
        var modal = true;
    };
    // if errors exist
    if(errors.length > 0){
       
        res.render('welcome.ejs', {
            errors,
            modal,
            name,
            email,
            password,
            password2
        });
    }else{
        user = {
            username: name,
            email: email, 
        }
        // encrypt password 
        
        console.log(req.body.password);
        var hashPass = bcrypt.genSalt(10, (err, salt) => 
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            console.log('hash: ' + hash);
            if(err) throw err;
            console.log("hash2: " + hash);
            //store hashed pass
            user.password = hash;
            console.log("User name: " + user.userName);
            console.log("User EMAIL: " + user.email);
            
        
        console.log('hashPASSS: ' + hashPass)
    db.User.create(
        user
    ).then(function(dbUser) {
        //#####could not get this working#####
    //   req.flash('success_msg', 'Registration success! You can now log in.');
    //#####could not get this working#####


      res.redirect('/user/success');
    })
      .catch(function(err) {
        // catch the model validation errors
        // format err response for front end use.
      console.log("error: " + err);
       var modal = true;
       
        for(var i = 0; i < err.errors.length; i++) {
            
            // checks null entry violation
            if(err.errors[i].validatorKey === "isUnique"){
                
                errors.push({msg: `${err.errors[i].path} already in use!`});
                
            }

            // checks email and password length
        }
        
        res.render('welcome.ejs', {
            modal,
            errors,
            name,
            email,
            password,
            password2
        });
       

        
      });}));
    };
  });
  app.post('/user/signin', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: "/user/login",
        failureFlash: false
    })(req, res, next)
  });
}