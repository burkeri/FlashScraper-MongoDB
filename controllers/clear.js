// imports
var db = require("../models");

module.exports = {

  clear: function(req, res) {

    db.Article.remove({})

        .then(function() {

            return db.Note.remove({});

        })

        .then(function() {
            
            res.json({ ok: true });
      });

  }
};
