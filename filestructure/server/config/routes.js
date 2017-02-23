var users = require('../controllers/users.js')
module.exports = function(app){

app.post('/new',function(req,res){
  console.log(req);
users.add(req,res);


});

app.get('/all', function(req,res){

  users.showall(req,res);
});

app.get('/users/:id', function(req,res){

    console.log(req);
    users.showone(req,res);
});

app.put('/update/:id',function(req,res){
  console.log(req);
users.update(req,res);

});

app.delete('/delete/:id',function(req,res){
  console.log("delete",req);
  users.delete(req,res);
});

}

// app.get('/', function(req, res) {
//
//   users.showall(req,res)
//   // showall
// })
// app.get('/new',function(req,res){
//   res.json('new');
// });
// app.post()
