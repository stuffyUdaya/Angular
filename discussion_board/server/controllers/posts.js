var mongoose = require('mongoose');
var Post = mongoose.model('Post')
var Topic = mongoose.model('Topic')
module.exports = {
  addpost :  function(req,res){
    console.log("coming from posts controller", req.body);
    Topic.findOne({_id:req.params.id},function(err,topic){
      if(err){
        console.log("error from posts controller",err);

      }

      var post = new Post({post : req.body.post, user: req.body.user});

      console.log("post", post);

      post.save(function(err){
        topic.posts.push(post);
        topic.save(function(err){
          if(err){
            console.log("something went wrong");
            res.json(err);
          }
          else{
            res.json({post_created:'true', post:post});
          }
        })
      })

    })

  },

  addlike : function(req,res){
    console.log("id from addlike",req.params.id);
    Post.findOneAndUpdate({_id:req.params.id}, { $inc: { like: 1 }},{new:true},function(err,likes){
      if(err){
        console.log("went wrong");
      }

      console.log("post",likes)
      res.json({like:likes})
    })
  },

  adddislike : function(req,res){
    console.log("id from dislike",req.params.id);
    Post.findOneAndUpdate({_id:req.params.id}, { $inc: { dislike: 1 }},{new:true},function(err,dislikes){
      if(err){
        console.log("went wrong");
      }

      console.log("post",dislikes)
      res.json({like:dislikes})
    })
  }




}
