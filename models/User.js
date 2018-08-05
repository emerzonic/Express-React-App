var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  password: String,
  articles: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article"
  }
]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);