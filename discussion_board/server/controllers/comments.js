var mongoose = require('mongoose');
var Comment = mongoose.model('Comment')
var Post = mongoose.model('Post')
var User = mongoose.model('User')
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
      if(err){
        console.log("went wrong", err);
      }
      else{
      post.comments.push(comment);
      /////////

      // User.findOne({_id: req.body.user.id},function(err,user){
      //   if(err){
      //     console.log("error",err)
      //   }
      //   else{
      //     console.log("#########################")
      //     console.log("comments",comment);
      //     console.log("#########################")
      //     console.log("user is ",user)
      //
      //     user.comments.push(comment);
      //     console.log(user.comments);
      //     user.save(function(err){
      //       if(err){
      //       console.log("went wrong",err);
      //     }
      //     else{
      //       console.log("comment pushed successfully")
      //     }
      //     })
      //
      //   }
      // })

      ////////
      post.save(function(err){
        if(err){
          console.log("something went wrong", err);
          res.json(err);
        }
        else{
          res.json({comment:true, comment:comment});
        }
      })
    }
    })
  })
}


}
