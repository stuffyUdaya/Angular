var mongoose = require('mongoose');
var User = mongoose.model('User')
module.exports = {
showall: function(req,res){
          User.find({},function(err,users){
            if(err) {
              console.log('something went wrong');
            }
            else{
            res.json(users);
          }
          });
        },

        add:   function(req,res){

                    console.log(req.body);
                    var user = new User(req.body);

                    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
                    user.save(function(err) {
                      // if there is an error console.log that something went wrong!
                      if(err) {
                        console.log('something went wrong');
                      } else { // else console.log that we did well and then redirect to the root route
                        console.log('successfully added a user!');
                      }
                      res.redirect('/');
                    })
        },


        showone: function(req,res){

                  User.find({_id:req.params.id},function(err,users){
                    if(err) {
                      console.log('something went wrong');
                    }
                    else{
                    res.json({users:users})
                  }
                });

        },


        update: function(req,res){

              console.log("users",req);
              User.findById(req.params.id,function(err,user){
                if (err){
                  console.log("something went wrong", err);
                }
                else{
                  console.log(req.params.id)
                  user.fname = req.body.fname
                  user.lname = req.body.lname
                  user.bday = req.body.bday
                  user.save()
                  res.redirect('/');
                }
              });
},


delete:  function(req,res){

              User.findById(req.params.id).remove(function(err){
                if(err){
                  console.log("some thing wrong",+err);
                }
                res.redirect('/');
              })

},



}
