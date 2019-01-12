// dependencies
// mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// define schema
var ArticleSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        default: false
    }
});

// create model
var Article = mongoose.model("Article", ArticleSchema);

// export model
module.exports = Article;