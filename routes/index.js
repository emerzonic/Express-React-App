var express = require('express');
var router = express.Router();
var request = require('request');
var Article = require('../models/Article');


//==============================================
//Route to get NYT articles via API
//==============================================
router.get('/API/search/:term/:start/:end', function (req, res) {
    var params = {
        'api-key': process.env.REACT_APP_NYT_KEY,
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
router.post('/save_articles', function (req, res) {
    Article.create(req.body, function (err, article) {
        if (err) {
            console.log(err);
        } else {
            res.end();
        }
    });
});


// ==============================================
// Route to get all saved articles
// ==============================================
router.get("/articles/saved", function (req, res) {
    Article.find({}, function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.json(articles)
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