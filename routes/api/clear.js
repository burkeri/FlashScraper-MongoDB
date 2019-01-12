// dependencies
var router = require("express").Router();

// import
var clearController = require("../../controllers/clear");

// route
router.get("/", clearController.clearDB);

module.exports = router;