var passport = require('passport');
var express = require('express');
var User = require('../models/User');
var router = express.Router();


//=======================
//User signup rouute
//=======================
router.post("/signup", (req, res) => {
    var newUser = new User({
        fullName: req.body.firstName,
        username: req.body.username,
    });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            res.json({
                'err': err.message
            })
        } else {
            passport.authenticate("local")(req, res, () => {
                res.json({
                    _id: req.user._id,
                    username: req.user.username
                });
            });
        }
    });
});

//==============================================
//Sign In Route
//==============================================
router.post("/signin", passport.authenticate("local"), (req, res) => {
    res.json({
        _id: req.user._id,
        username: req.user.username
    });
});

//==============================================
//Logout route
//==============================================
router.get("/logout", (req, res) => {
    req.logout();
    res.end();
});


module.exports = router;