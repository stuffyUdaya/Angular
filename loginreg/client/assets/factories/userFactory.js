myApp.factory('userFactory',['$http',function($http){
  console.log("created user u ")
  var users = [];
  var factory ={};

  factory.saveUser = function(saveUser,callback){
    console.log(callback)
    console.log(saveUser);
    users.push(saveUser);
    console.log(saveUser);
    $http.post('/new', saveUser).then(function(response){
      console.log(saveUser);
      console.log('response is ', response.data);
      var message = response.data;
      console.log('user record created');
      console.log(message);
      callback(message);

    })
  }

  factory.checkUser = function(logindata, callback){
    console.log("login info",logindata);
    $http.post('/check',logindata).then(function(response){
      console.log(logindata);
      console.log("response is", response.data);
        var msg = response.data;
        console.log('login ctrl passed');
        callback(msg);

    }
  )
  }


return factory;


}]);
