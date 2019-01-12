// dependencies
var router = require("express").Router();

// import
var articleController = require("../../controllers/headline");

// routes
router.get("/", articleController.findAll);
router.delete("/:id", articleController.delete);
router.put("/:id", articleController.update);

module.exports = router;
