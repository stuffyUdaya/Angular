var mongoose = require('mongoose');
var Post = mongoose.model('Post')
var Topic = mongoose.model('Topic')
var User = mongoose.model('User');
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
        if(err){
          console.log("went wrong",err);
        }
        else{
        topic.posts.push(post);
        /////////

        // User.findOne({_id: req.body.user.id},function(err,user){
        //   if(err){
        //     console.log("error",err)
        //   }
        //   else{
        //     console.log("#########################")
        //     console.log("posts",post);
        //     console.log("#########################")
        //     console.log("user is ",user)
        //
        //     user.posts.push(post);
        //     console.log(user.posts);
        //     user.save(function(err){
        //       if(err){
        //       console.log("went wrong",err);
        //     }
        //     else{
        //       console.log("post pushed successfully")
        //     }
        //     })
        //
        //   }
        // })

        ////////
        topic.save(function(err){
          if(err){
            console.log("something went wrong");
            res.json(err);
          }
          else{
            res.json({post_created:'true', post:post});
          }
        })
      }
      })

    })

  },

  addlike : function(req,res){
    console.log("id from addlike",req.params.id);
    Post.find({_id:req.params.id},function(err,post){
      if(err){
        console.log("went wrong", err);
      }
      if(post){
          console.log("postttttttttt", post[0]._id);
          if(post[0].user.id == req.body.id){
            res.json({like:post})
          }
          else{
            Post.findOneAndUpdate({_id:req.params.id}, { $inc: { like: 1 }},{new:true},function(err,likes){
              if(err){
                console.log("went wrong");
              }

              console.log("post",likes)
              res.json({like:likes})
            })

          }
      }
    })
    // Post.findOneAndUpdate({_id:req.params.id}, { $inc: { like: 1 }},{new:true},function(err,likes){
    //   if(err){
    //     console.log("went wrong");
    //   }
    //
    //   console.log("post",likes)
    //   res.json({like:likes})
    // })
  },

  adddislike : function(req,res){
    console.log("id from dislike",req.params.id);
    Post.find({_id:req.params.id},function(err,post){
      if(err){
        console.log("went wrong", err);
      }
      if(post){
          console.log("postttttttttt", post[0]._id);
          if(post[0].user.id == req.body.id){
            res.json({like:post})
          }
          else{
            Post.findOneAndUpdate({_id:req.params.id}, { $inc: { dislike: 1 }},{new:true},function(err,dislikes){
              if(err){
                console.log("went wrong");
              }

              console.log("post",dislikes)
              res.json({like:dislikes})
            })

          }
    // Post.findOneAndUpdate({_id:req.params.id}, { $inc: { dislike: 1 }},{new:true},function(err,dislikes){
    //   if(err){
    //     console.log("went wrong");
    //   }
    //
    //   console.log("post",dislikes)
    //   res.json({like:dislikes})
    // })
  }

})

}
}
