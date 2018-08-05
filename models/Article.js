var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  'headline': { type: String },
  'body': { type: String },
  'link': { type: String },
  'img': { type: String },
  'date': { type: Date},
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now },
});


module.exports = mongoose.model('Article', articleSchema);
