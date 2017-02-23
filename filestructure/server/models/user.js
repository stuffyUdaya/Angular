var mongoose= require('mongoose');
var UserSchema = new mongoose.Schema({
 fname: String,
 lname: String,
 bday: Date,

},{timestamps:true})
 mongoose.model('User', UserSchema); // We are setting this Schema in our Models
