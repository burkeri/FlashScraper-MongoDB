// imports
var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {

    scrapedArticles: function(req, res) {

        return scrape().then(function(articles){

            return db.Article.create(articles)
        })
        .then (function(dbArticle){
            
            if (dbArticle.length === 0) {
                res.json({
                    message: "No new stories."
                });
            }
        })
        .catch(function(err){
            res.json({
                message: "Done."
            });
        });
    }

};