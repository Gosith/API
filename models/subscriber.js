const mongoose = require('mongoose');

const subschema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  } ,
  subscribedtochannel:{
    type:String,
    required:true
  },
  subsDate:{
    type: Date,
    required : true,
    default : Date.now
  },

})

module.exports = mongoose.model('Subscriber',subschema);