var express = require('express');
var router = express.Router();
var request = require('request');
var Article = require('../models/Article');
var User = require('../models/User');
var key = process.env.REACT_APP_NYT_KEY;


//==============================================
//Route to get NYT articles via API
//==============================================
router.get('/API/search/:term/:start/:end', function (req, res) {
    var params = {
        'api-key':key,
        'q': req.params.term,
        'start_date': req.params.start,
        'end_date': req.params.end
    }
    request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: params,
    }, function (err, response, body) {
        body = JSON.parse(body);
        res.json(body);
    });
});


//==============================================
//Route to add/save news article to user
//==============================================
router.post('/save_articles/:userId', function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err) {
        } else {
            Article.create(req.body, function (err, article) {
                if (err) {
                    console.log(err);
                } else {
                    user.articles.push(article);
                    user.save();
                    res.end();
                }
            });
        }
    });
});


// ==============================================
// Route to get all saved articles
// ==============================================
router.get("/articles/saved/:userId", function (req, res) {
    User.findById(req.params.userId).populate('articles').exec(function(err, user){
        if (err) {
            console.log(err);
        } else {
            res.json(user.articles)
        }
    });
});


// ==============================================
// Route to delete an article
// ==============================================
router.delete('/:id', function (req, res) {
    Article.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.end();
        }
    });
});


module.exports = router;