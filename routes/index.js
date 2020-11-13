var express = require("express");
var axios = require('axios');

var router = express.Router();

/// show sign up form
router.get("/show",function(req,res){
    res.render("index");
});

router.post("/sendText",function(req,res){
    console.log(req.body.data);
    // res.render("index");
    let url ='https://www.google.com/';
    axios.get(url).then(response => {
        console.log(response.data);
    }).catch(err => {
        // handle error
        console.log("error = " + err);
    });
});

module.exports = router;