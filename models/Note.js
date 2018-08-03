var mongoose = require("mongoose");

var noteSchema = new mongoose.Schema({
    text: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Note", noteSchema);
