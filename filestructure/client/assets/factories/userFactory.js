myApp.factory('userFactory',['$http',function($http){
  console.log("created user u ")
  var users = [];
  var factory ={};
  factory.saveUser = function(saveUser){
    console.log(saveUser);
    users.push(saveUser);
    console.log(saveUser);
    $http.post('/new', saveUser).then(function(){
      console.log(saveUser);
      console.log('user record created');

    })

  }

  factory.showAll = function(callback){
    console.log(callback);
    $http.get('/all').then(function(response){
      console.log('response is', response.data);
      var users = response.data;
      console.log(users);
      callback(users);
    })
  }

  factory.showUser = function(id,callback){
    console.log(id);
    console.log(callback);
    $http.get('/users/'+id).then(function(response){
      console.log('response is', response.data);
      var showuser = response.data;
      console.log(showuser);
      callback(showuser);
    })
  }



  factory.updateUser = function(id,updateUser){

    console.log("update",id);

    $http.put('/update/'+id,updateUser).then(function(){
      console.log(updateUser);
      console.log('user record updated');

    })
  }

    factory.deleteUser = function(deleteUser){
      console.log(deleteUser);
        $http.delete('/delete/'+deleteUser).then(function(){
          console.log("deleted");
    });
}



  // factory.showOne = function(id,callback){
  //
  //   $http.get('/users/'+id).then(function(response){
  //     // callback(response.data);
  //     console.log('response is', response.data);
  //     var showuser = response.data;
  //     callback(showuser);
  //     console.log("jfcfshowuser",showuser);
  //   })
  //
  // }


  return factory;
}]);
