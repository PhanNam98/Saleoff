var mongoose = require('mongoose');
var Schema =mongoose.Schema;
var BhxSchema=new Schema({
   
    name:{
        type:String,
        // required:true,
        index: { unique: true }
       
    },
    link:{
        type:String,
    },
});
BhxSchema.index({
    name: 'text'
  }, {
    weights: {
      name: 5
    },
  });
module.exports = mongoose.model("Bhx", BhxSchema);