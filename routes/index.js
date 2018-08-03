var express = require('express');
var router = express.Router();
var webScrapper = require('../scrape');
var Article = require('../models/Article');
// var middleware = require('../middleware/index');

//==============================================
//Route to scrap web page
//==============================================
router.get('/', function (req, res) {
  // webScrapper(function (err, data) {
  //     if (err) {
  //         console.log(err);
  //     } else {
          res.send('It is working');
      })
//   });
// });


//==============================================
//Route to add/save news article to user
//==============================================
router.post('/save_articles', function (req, res) {
    // User.findById(req.user._id, function (err, user) {
        // if (err) {
        //     console.log(err);
        // } else {
            Article.create(req.body, function (err, article) {
                if (err) {
                    console.log(err);
                } else {
                    // user.articles.push(article);
                    // user.save();
                    res.end();
                }
            });
        
    // });
});


// ==============================================
// Route to get all saved articles
// ==============================================
router.get("/articles/saved", function (req, res) {
    Article.find({}, function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            if (articles.length < 1) {
                console.log("no articles");
                // req.flash("info","You do not have any saved articles at this time.");
                // res.redirect("/scrape_articles");
            } else {
                res.json(articles)
            }
        }
    });
});




// ==============================================
// Route to delete an article
// ==============================================
router.delete('/:id',function (req, res) {
    Article.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});


module.exports = router;
