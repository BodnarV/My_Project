var mongoose = require('../modules/mongoose.js');
var chatSchem = mongoose.Schema({

  text: { type: String }


});

const chat = mongoose.model("Chat",chatSchem);
module.exports = chat;
