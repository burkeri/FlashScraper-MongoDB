// dependencies
var router = require("express").Router();

// import
var noteController = require("../../controllers/note");

// routes
router.get("/:id", noteController.find);
router.post("/", noteController.create);
router.delete("/:id", noteController.delete);

module.exports = router;
