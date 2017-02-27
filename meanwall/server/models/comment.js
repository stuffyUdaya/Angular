var mongoose       = require('mongoose');
// var Message = mongoose.model('Message')
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({

  comment: {type: String, required: true},
  cuser:{
    id: String,
    name: String
  },

  _post: {type: Schema.Types.ObjectId, ref: 'Message'},
}, {timestamps: true});










mongoose.model('Comment', CommentSchema);
