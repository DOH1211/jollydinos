// var express  = require('express');
// var port     = process.env.PORT || 3000;
// var mongoose = require('mongoose');
// var passport = require('passport');
// var flash    = require('connect-flash');
// var apiRouter = require('./server/router.js');
// // var cors = require('cors');

// var app = express();
// var express  = require('express');
// var port     = process.env.PORT || 3000;
// var mongoose = require('mongoose');
// var passport = require('passport');
// var flash    = require('connect-flash');
// var apiRouter = require('./server/router.js');

// var app = express();

// var morgan       = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser   = require('body-parser');
// var session      = require('express-session');


// var configDB = require('./server/db.js');
// mongoose.connect(configDB.url); // connect to our database
// require('./server/config/passport')(passport); // pass passport for configuration

// // set up our express application
// app.use(morgan('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)
// app.use(bodyParser()); // get information from html forms

// app.set('views', __dirname + '/server/views'); // set up ejs for templating
// app.set('view engine', 'ejs');
// app.use(express.static('./server/images')); //needed to display images in templates






// /* old code before login ==============================================
var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./server/router.js');
var cors = require('cors');
// var util = require('./server/util')
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());
app.use("/", express.static(__dirname + "/client/"));
app.use("/api", apiRouter);

app.listen(process.env.PORT || 3000);
console.log("Listening on port 3000...");

