var users = require('../controllers/users.js')
var topics = require('../controllers/topics.js')
var posts = require('../controllers/posts.js')
var comments = require('../controllers/comments.js')
module.exports = function(app){


  app.post('/new',function(req,res){
    console.log(req);
  users.add(req,res);


  });

  app.post('/check',function(req,res){
    console.log(req);
    users.checklogin(req,res);
  });

  app.post('/addtopic',function(req,res){
    console.log("request body from server controller",req);
    topics.addtopic(req,res);
  })


app.get('/all',function(req,res){
  topics.showall(req,res);
})

app.get('/topics/:id',function(req,res){
  topics.showone(req,res);
});

app.get('/users/:id',function(req,res){
  users.showuser(req,res);
});



app.post('/addpost/:id',function(req,res){

  console.log("$" * 50);
  console.log("request from routes regarding posts", req.body);
  console.log("$" * 50);
  posts.addpost(req,res);
})

app.post('/addcomment/:id',function(req,res){
  console.log("request from comments", req.body);
  comments.addcomment(req,res);
})

app.post('/addlike/:id',function(req,res){
  console.log("coming from add like", req);
  console.log(req.params.id)
  posts.addlike(req,res);
})

app.post('/adddislike/:id',function(req,res){
  console.log("coming from add dislike", req);
  console.log(req.params.id)
  posts.adddislike(req,res);
})





}
