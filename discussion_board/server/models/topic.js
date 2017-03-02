var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TopicSchema = new mongoose.Schema({
  name: String,
  description: String,
  category:String,
  user: {
    id: String,
    name: String
  },
  posts : [{type: Schema.Types.ObjectId, ref: 'Post'}],
},
{timestamps:true});

mongoose.model('Topic', TopicSchema);
