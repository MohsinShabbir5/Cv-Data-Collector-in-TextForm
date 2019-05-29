var mongoose = require('mongoose');

var textSchema = mongoose.Schema({
   text : String
  });
  
  module.exports = mongoose.model('text', textSchema); 