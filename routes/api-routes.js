// api-routes -- routs to access db

// requiring models
var db = require("../models");
var bcrypt = require('bcryptjs');
var user= {};
// routes
module.exports = function(app){
    
    // // POST route to add new user
    // app.post("/user/register", function(req, res) {
    //         // before we register, validate password match and form requirements. Sequelize will do the rest of our validation.
    //         // this is required because I am asking for 2 passwords but will only use one for the DB.
    //         // because of this, there is no validation in place for the second password field in my model.
    //         // I also realize I could easily write a custom validation for this and still utilize the model validation...

    //        var { name, email, password, password2 } = req.body;
    //        var errors = [];
           
    //         //enforce field requirement
    //        if ( !name || !email || !password || !password2 ) {
    //            errors.push({msg: "Please answer all fields"});
    //             var modal = true;
    //        };

    //         //password match
    //         if(password !== password2){
    //             errors.push({msg: "Passwords do not match"});
    //             var modal = true;
    //         };
    //         // if errors exist
    //         if(errors.length > 0){
               
    //             res.render('welcome.ejs', {
    //                 errors,
    //                 modal,
    //                 name,
    //                 email,
    //                 password,
    //                 password2
    //             });
    //         }else{
    //             user = {
    //                 userName: name,
    //                 email: email, 
    //             }
    //             // encrypt password 
                
    //             console.log(req.body.password);
    //             var hashPass = bcrypt.genSalt(10, (err, salt) => 
    //             bcrypt.hash(req.body.password, salt, (err, hash) => {
    //                 console.log('hash: ' + hash);
    //                 if(err) throw err;
    //                 console.log("hash2: " + hash);
    //                 //store hashed pass
    //                 user.password = hash;
    //                 console.log("User name: " + user.userName);
    //                 console.log("User EMAIL: " + user.email);
                    
                
    //             console.log('hashPASSS: ' + hashPass)
    //         db.User.create(
    //             user
    //         ).then(function(dbUser) {
             
    //           res.redirect('/user/success');
    //         })
    //           .catch(function(err) {
    //             // catch the model validation errors
    //             // format err response for front end use.
    //           console.log("error: " + err);
    //            var modal = true;
    //             for(var i = 0; i < err.errors.length; i++) {
                    
    //                 // checks null entry violation
    //                 if(err.errors[i].validatorKey === "is_null"){
                        
    //                     errors.push({msg: "Please answer all fields"});
                        
    //                 }

    //                 // checks email and password length
    //             }
                
    //             res.render('welcome.ejs', {
    //                 modal,
    //                 errors,
    //                 name,
    //                 email,
    //                 password,
    //                 password2
    //             });
               

                
    //           });}));
    //         };
    //       });
    
    
    
    app.get("/api/user", function(req, res) {
            // findAll returns all entries for a table when used with no options
            db.User.findAll({}).then(function(dbTodo) {
              // We have access to the todos as an argument inside of the callback function
              res.json(dbTodo);
            });
          });

//     // GET route for getting all of the todos
//   app.get("/api/todos", function(req, res) {
//     // findAll returns all entries for a table when used with no options
//     db.Todo.findAll({}).then(function(dbTodo) {
//       // We have access to the todos as an argument inside of the callback function
//       res.json(dbTodo);
//     });
//   });

//   // POST route for saving a new todo
//   app.post("/api/todos", function(req, res) {
//     // create takes an argument of an object describing the item we want to
//     // insert into our table. In this case we just we pass in an object with a text
//     // and complete property (req.body)
//     db.Todo.create({
//       text: req.body.text,
//       complete: req.body.complete
//     }).then(function(dbTodo) {
//       // We have access to the new todo as an argument inside of the callback function
//       res.json(dbTodo);
//     })
//       .catch(function(err) {
//       // Whenever a validation or flag fails, an error is thrown
//       // We can "catch" the error to prevent it from being "thrown", which could crash our node app
//         res.json(err);
//       });
//   });

//   // DELETE route for deleting todos. We can get the id of the todo to be deleted from
//   // req.params.id
//   app.delete("/api/todos/:id", function(req, res) {
//     // We just have to specify which todo we want to destroy with "where"
//     db.Todo.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbTodo) {
//       res.json(dbTodo);
//     });

//   });

//   // PUT route for updating todos. We can get the updated todo data from req.body
//   app.put("/api/todos", function(req, res) {

//     // Update takes in an object describing the properties we want to update, and
//     // we use where to describe which objects we want to update
//     db.Todo.update({
//       text: req.body.text,
//       complete: req.body.complete
//     }, {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbTodo) {
//       res.json(dbTodo);
//     })
//       .catch(function(err) {
//       // Whenever a validation or flag fails, an error is thrown
//       // We can "catch" the error to prevent it from being "thrown", which could crash our node app
//         res.json(err);
//       });
//   });
// };
}