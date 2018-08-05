var passport = require('passport');
var express = require('express');
var User = require('../models/User');
var router = express.Router();


//=======================
//Auth ROUTES - User signup
//=======================
router.post("/signup", function (req, res) {
    var newUser = new User({
        fullName: req.body.firstName,
        username: req.body.username,
    });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            res.json({'err':err.message})
           
            // req.flash("error", err.message);
            // return res.redirect("/signup");
        } else {
            passport.authenticate("local")(req, res, function () {
                // console.log(req.headers)
                // req.flash("info","Click the Get Articles link to view articles.");
                res.json({_id:req.user._id, username:req.user.username});
            });
        }
    });
});

//==============================================
////Auth ROUTES - user signin
//==============================================
router.post("/signin", passport.authenticate("local"), function(req, res) {
    res.json({_id:req.user._id, username:req.user.username});

});

//==============================================
//Logout route
//==============================================
router.get("/logout", function (req, res) {
    req.logout();
    // req.flash("success", "You are signed out!");
    res.redirect("/signin");
});


module.exports = router;