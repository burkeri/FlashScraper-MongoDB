// middleware
var router = require("express").Router();

// imports
var db = require("../../models");

// landing-pg
router.get("/", function(req, res){
    db.Article.find({}) .then(function(dbArticle){
        res.render("landingPg", {articles: dbArticle});
    });
});

// saved
router.get("/saved", function(req, res){
    db.Article.find({saved: true}).then(function(dbArticle){
        res.render("saved", {articles: dbArticle});
    });
});

module.exports = router;