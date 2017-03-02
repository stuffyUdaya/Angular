var mongoose = require('mongoose');
var Comment = mongoose.model('Comment')
var Post = mongoose.model('Post')
module.exports = {

addcomment: function(req,res){
  console.log("request coming from comment controller", req.body);
  Post.findOne({_id:req.params.id},function(err,post){
    if(err){
      console.log("something went wrong",err);
    }
    var comment = new Comment({comment: req.body.comment, user:req.body.user});
    console.log("comment",comment);
    comment.save(function(err){
      post.comments.push(comment);
      post.save(function(err){
        if(err){
          console.log("something went wrong", err);
          res.json(err);
        }
        else{
          res.json({comment:true, comment:comment});
        }
      })
    })
  })
}


}
