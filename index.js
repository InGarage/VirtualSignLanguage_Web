var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// //requring route
// var campgroundRoutes = require("./routes/campgrounds");
// var commentRoutes = require("./routes/comments");
// var indexRoutes = require("./routes/index");

// var Campground = require("./models/campground");
// // var seedDB = require("./seed");
// var Comment   = require("./models/comment");
// var User = require("./models/user");
var Unity = require("./routes/index");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.use(methodOverride("_method"));



app.use("/",Unity);
// app.use("/campgrounds",campgroundRoutes);
// app.use("/campgrounds/:id/comments",commentRoutes);


app.listen(5000,function(){
    console.log("Connected");
});