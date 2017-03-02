var mongoose = require('mongoose');
var Topic = mongoose.model('Topic')
var Post = mongoose.model('Post');

module.exports = {
addtopic : function(req,res){


  console.log("coming from topic controller",req.body);
  var topic = new Topic({name:req.body.name, description: req.body.description, category: req.body.category, user: req.body.user });
  topic.save(function(err){
    if(err){
      console.log("something went wrong in topic controller",err);
      res.json({err});

    }
    else{
      console.log("topic created successfully");
      res.json({create_topic:true,msg:"topic created successfully"})
    }
  })
},

showall : function(req,res){

  Topic.find({},function(err,topics){
    if(err){
      console.log("some thing went wrong in topics controller with in showall method",err);
    }
    else{
      console.log("getting all the topics",topics);
      res.json({topics:topics});
    }
  })
},
// /////////////////////////////////////////////////////////////

showone    : function(req,res){

  Topic.findOne({_id:req.params.id}).populate({path:'posts', populate:{path:'comments'}}).exec(function(err,topic){

    if(err){
      console.log("something went wrong in this topic showone controller");
    }

    else{
      // var length = posts.length;
      // console.log(posts[0]);
      // for(post in posts){
      //   Post.findOne({_id:posts[post].comments_id }).populate('comments').exec(function(err,comments){
      //
      //     if(err){
      //       console.log('something went wrong', err);
      //     }
      //     console.log("comments",comments)
      //     // res.json({posts:posts});
      //
      //   })
      // }
      console.log("topic", topic);
      res.json({topic:topic});
    }

  })


},



// /////////////////////////////////////////////////////////////
// showone    : function(req,res){
//
//   Topic.findOne({_id:req.params.id}, function(err,topics){
//     if(err){
//       console.log("some thing went wrong in showone controller", err);
//     }
//     else{
//
//       console.log("found the matched collection",topics);
//       res.json({found:true, topics:topics })
//     }
//   })
// },
// /////////////////////////////////////////////////////////////
addpost : function(req,res){
  Topic.findOne({_id:req.params.id},function(err,topics){


  })
}




}
