var mongoose = require('../modules/mongoose.js');
var CarsSchem = mongoose.Schema({

  ident:{type:String},
  model:{ type:String },
  cost:{ type:String },
  age:{ type:String },



});

const Cars = mongoose.model("Cars", CarsSchem);
module.exports = Cars;
