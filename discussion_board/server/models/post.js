var mongoose       = require('mongoose');
// var Message = mongoose.model('Message')
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({

  post: {type: String, required: true},
  user:{
    id: String,
    name: String
  },

  topic: {type: Schema.Types.ObjectId, ref: 'Topic'},

  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
like : {value: Number},
dislike : {value: Number},
},
{timestamps: true});










mongoose.model('Post', PostSchema);
