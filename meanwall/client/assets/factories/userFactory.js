myApp.factory('userFactory',['$http',function($http){
  console.log("created user u ")
  var users = [];
  var factory ={};
  var messages;
  var comment;

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

  factory.savePost = function (post,callback){
    console.log("post",post);
    $http.post('/addpost',post).then(function(response){
      messages.messages.push(response.data.message)
      console.log("response",response);
      console.log('postfactory passed');
      callback(response);
    })
  }

factory.showAll = function (callback){
    console.log(callback);
    $http.get('/all').then(function(response){
      console.log('response is', response.data);
      messages = response.data;
      console.log(messages);
      callback(messages);
    })
  }

  factory.saveComment = function(comment,callback){
    // console.log("cuser",cuser);
    console.log('post',comment);

    $http.post('/addcomment',comment).then(function(response){
      for(var i =0; i<messages.messages.length; i++){
        if(messages.messages[i]._id == response.data.comment._post){
          messages.messages[i].comments.push(response.data.comment);
        }
      }
      console.log('comment response through factory',response);
      console.log("comment factory passed");
      callback(response);
    })
  }


return factory;


}]);
