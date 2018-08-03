var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  'title': { type: String },
  'body': { type: String },
  'link': { type: String },
  'img': { type: String },
  'date': { type: Date},
  // 'writer': { type: String },
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now },
});


module.exports = mongoose.model('Article', articleSchema);
