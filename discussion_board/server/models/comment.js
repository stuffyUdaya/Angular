var mongoose       = require('mongoose');
// var Message = mongoose.model('Message')
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({

  comment: {type: String, required: true},
  user:{
    id: String,
    name: String
  },

  post: {type: Schema.Types.ObjectId, ref: 'Post'},
}, {timestamps: true});









mongoose.model('Comment', CommentSchema);
