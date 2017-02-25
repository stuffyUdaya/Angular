var users = require('../controllers/users.js')
module.exports = function(app){


  app.post('/new',function(req,res){
    console.log(req);
  users.add(req,res);


  });

  app.post('/check',function(req,res){
    console.log(req);
    users.checklogin(req,res);
  });












}
