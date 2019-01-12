// dependencies
var router = require("express").Router();

// import
var fetchController = require("../../controllers/fetch");

// route
router.get("/", fetchController.scrapedArticles);

module.exports = router;
