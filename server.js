// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS
var app = express();
var PORT = process.env.PORT || 8080;

// DATA PARSING
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// REQUIRE ROUTES
require("./app/data/friends");
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// STARTS SERVER TO LISTENING 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
