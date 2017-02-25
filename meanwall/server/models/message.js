var mongoose       = require('mongoose');


var MessageSchema = new mongoose.Schema({

    msg: String,

    user:{
      id: String,
      name: String
    },





},{timestamps:true});

mongoose.model('Message', MessageSchema);
