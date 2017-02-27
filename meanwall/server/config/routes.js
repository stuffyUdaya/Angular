var users = require('../controllers/users.js')
var messages = require('../controllers/messages.js')
var comments = require('../controllers/comments.js')

// var comments = require('../controllers/comments.js')

module.exports = function(app){


  app.post('/new',function(req,res){
    console.log(req);
  users.add(req,res);


  });

  app.post('/check',function(req,res){
    console.log(req);
    users.checklogin(req,res);
  });

app.post('/addpost',function(req,res){
  console.log('*'* 100);
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
  console.log('post',req.body);
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
  console.log('%'* 100);
  messages.addpost(req,res);

})

app.get('/all',function(req,res){
  messages.showall(req,res);
})

app.post('/addcomment',function(req,res){

  console.log("$$$$$$$$$$commentssssss$$$$$$$$$$$$$$$$$$$$");
  console.log('post',req.body);
  console.log("$$$$$$$$$$$$commentssssssss$$$$$$$$$$$$$$$$$$");
comments.addcomment(req,res);

})










}
