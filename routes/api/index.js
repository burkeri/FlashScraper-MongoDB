// dependencies
var router = require("express").Router();

// imports
var fetchRoutes = require("./fetch");
var noteRoutes = require("./notes");
var articleRoutes = require("./headlines");
var clearRoutes = require("./clear");

// routes
router.use("/fetch", fetchRoutes);
router.use("/notes", noteRoutes);
router.use("/headlines", articleRoutes);
router.use("/clear", clearRoutes);

module.exports = router;