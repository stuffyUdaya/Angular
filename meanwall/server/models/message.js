var mongoose       = require('mongoose');

var Schema = mongoose.Schema;


var MessageSchema = new mongoose.Schema({

    msg: String,

    user:{
      id: String,
      name: String
    },

    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],




},{timestamps:true});


// var CommentSchema = new mongoose.Schema({
//
//   comment: String,
//   cuser:{
//     id: String,
//     name: String
//   },
//
//   post: {type: Schema.Types.ObjectId, ref: 'Message'},
// }, {timestamps: true});
//
//
//
//
//
//
//
//
//
//
// mongoose.model('Comment', CommentSchema);


mongoose.model('Message', MessageSchema);
