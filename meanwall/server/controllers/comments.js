var mongoose = require('mongoose');
var Message = mongoose.model('Message')
var Comment = mongoose.model('Comment')
module.exports = {



  addcomment:  function(req,res){

    // console.log("coming from comments controller",req.body);
    console.log("coming from comments controller",req.body.comment);


  Message.findOne({_id:req.body.post},function(err,post){
    if(err){

      console.log('error from message model',err);
    }
    console.log("find Message",post);
    var comment = new Comment({comment:req.body.comment, cuser:req.body.cuser, _post: req.body.post});
    console.log("comment",comment);
    comment.save(function(err){
        post.comments.push(comment);
        post.save(function(err){
          if(err){
            console.log("something went wrong");
            res.json(err);
          }
          else{
            res.json({comment:'created',comment:comment});
          }



        })


      })


})


}

}


      // Message.save(function(err){
      //   comment.save(function(err){
      //
      //       if(err){
      //         console.log(err,'something went wrong in comment controller');
      //         res.json(err);
      //       }
      //
      //       else{
      //         console.log("successfully added a comment");
      //         console.log("comment is",comment);
      //         res.json({comment_created:true, comment:comment});
      //       }
      //
      //
      //   })
      //
      //   if(err){
      //           console.log('error',err);
      //         }
      //       })
      //     })
      //
      //
      //
      //   }
