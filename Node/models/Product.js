var mongoose = require('../modules/mongoose.js');
var ProductSchem = mongoose.Schema({

  img:{ type:String },
  model:{ type:String },
  cost:{ type:String },
  age:{ type:String },



});

const Product = mongoose.model("Product", ProductSchem);
module.exports = Product;
