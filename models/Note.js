// dependencies
// mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// define schema
var NoteSchema = new Schema({

    _articleId: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    },
    body: {
        type: String,
        required: "Please enter text."
    }
});

// create model
var Note = mongoose.model("Note", NoteSchema);

// export model
module.exports = Note;