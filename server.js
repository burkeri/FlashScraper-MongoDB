// dependencies ------
// express
var express = require("express");
var app = express();
// mongoose
var mongoose = require("mongoose");
// handlebars
var exphbs = require("express-handlebars");

// middleware ------
// JSON req body
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// static folder
app.use(express.static("public"));

// connect handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// connect db
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

// config port
var PORT = process.env.PORT || 8080;


// routes
/*

 ERROR: cannot find module "routes"

 */
var routes = require("./routes");
app.use(routes);

// start server
app.listen(PORT, function(){
    console.log("listening on... " + PORT);
});
