var mongoose = require('mongoose');
var User = mongoose.model('User')
var Topic = mongoose.model('Topic')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')
var bcrypt = require('bcrypt');


module.exports = {

  add:   function(req,res){

                      console.log("coming from server controller request",req.body);
                      var user = new User(req.body);

                      // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
                      user.save(function(err) {
                        // if there is an error console.log that something went wrong!
                        if(err) {
                          console.log(err,'something went wrong');

                          res.json(err);
                          // res.redirect('/reg');

                        } else { // else console.log that we did well and then redirect to the root route
                          console.log('successfully added a user!');
                          console.log(user);
                          res.json({created:true,user:user});
                        }
                      })
          },



    checklogin:   function(req,res){


                    console.log("coming from login controller", req.body.username);

                    User.findOne({username: req.body.username},function(err,user){
                      console.log(err);
                      console.log(user);
                      if(user){
                        console.log(user);
                        console.log(err)
                        if(bcrypt.compareSync(req.body.password, user.password)){
                          console.log("loginmethod successfully matched with entries in database")
                          res.json({logged_in:true, user:user})
                        }
                        else{
                          console.log("invalid password");
                          res.json({logged_in:false, err:"Invalid Password"})
                        }
                      }
                      else{
                        console.log("username doesn't exist in our database")
                        res.json({logged_in:false, err:"Invalid username"});
                      }









                    })



    },


showuser     : function(req,res){

  console.log("paramsid",req.params.id);

  Topic.find({"user.id" :req.params.id},function(err,topics){
    if(err){
      console.log("went wrong", err);
    }
  else{
    Post.find({"user.id": req.params.id},function(err,posts){
          if(err){
            console.log("went wrong");
          }
          else{
          console.log(posts);
          Comment.find({"user.id": req.params.id},function(err,comments){
            if(err){
              console.log("went wrong",err);
            }
            else{
            console.log(comments);
            User.find({_id: req.params.id},function(err,user){
              if(err){
                console.log("went wrong",err);
              }
              else{
                console.log(user);
                res.json({'user':user,'topics':topics,'posts':posts,'comments':comments});
              }
            })
          }
          })
        }
        })
      }

    // console.log("topic",topics,"posts",posts,"comments",comments);
  })
}








}
