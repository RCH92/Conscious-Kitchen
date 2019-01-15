var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');
var passport = require('passport');
var env = require('dotenv').load();
var session = require('express-session');
var bodyParser = require('body-parser')
//#####could not get this working#####
// var flash = require('connect-flash');

//#####could not get this working#####
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();



// sequelize
var db = require('./models');
// passport config
require('./config/passport.js')(passport, db);

// define a port
var PORT = process.env.PORT || 8080;





// EJS
//=====================================================================


app.use(expressLayouts);
app.set('view engine', 'ejs');

// body parser
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

 
  //#####could not get this working#####
app.set('trust proxy', 1);
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    key: 'sid',
    cookie: {
        maxAge: 60000,
        secure: false
    }
    
  }));
//   app.use(flash());
  
//   passport midware
app.use(passport.initialize());
app.use(passport.session());


//#####could not get this working#####

app.use(express.json());
app.use('/public', express.static('./'));
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/whatInput', express.static('node_modules/what-input/dist'));
app.use('/foundation', express.static('node_modules/foundation-sites/dist'));

if(process.env.JAWSDB_URL) {
    conndection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createconnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'CK_DB'
    });
};
// app.use((req, res, next) => {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
// });



// Routes
// ====================================================================
require("./routes/api-routes.js")(app);
require("./routes/users.js")(app,passport);
app.use('/', require('./routes/html-routes'));
// require("./routes/html-routes.js")(app);
// ====================================================================

// sync models and start app
// ====================================================================
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`Listening on port ${PORT}`);
    });
});