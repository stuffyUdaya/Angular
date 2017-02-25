var mongoose = require('mongoose');
var Message = mongoose.model('Message')
module.exports = {


addpost :    function(req,res){

            console.log("coming from messages controller",req.body);
            console.log(req.body.message)

            var message = new Message({msg:req.body.message, user:req.body.user});

            message.save(function(err){

                if(err){
                  console.log(err,'something went wrong in msg controller');
                  res.json(err);
                }

                else{
                  console.log("successfully added a post");
                  console.log("message is",message);
                  res.json({msg_created:true, message:message});
                }


            })



},

showall  :   function(req,res){

              Message.find({},function(err,messages){
                if(err){
                  console.log("some thing went wrong in showall controller");
                }
                  else{
                    console.log(messages,"from messages showall");
                    res.json({messages:messages});
                  }

              })

}














}
