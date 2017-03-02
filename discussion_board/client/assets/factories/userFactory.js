myApp.factory('userFactory',['$http',function($http){
  console.log("created user u ")
  var users = [];
  var factory ={};
  var topics = [];
  var topic = {};
  var posts =[];
  var user = {};

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

  factory.addTopic = function(topic,callback){
    console.log("topic",topic);
    $http.post('/addtopic',topic).then(function(response){
      topics.data.topics.push(topic);
      console.log("response from topic fctory",response);
      console.log("topic factory passed");
      callback(response);

    })
  }

factory.showall = function(callback){
  $http.get('/all').then(function(response){
    console.log("reponse from showall factory",response);
    topics = response;
    callback(topics);
  })
}

factory.showTopic = function(id,callback){
console.log("id from userfactory showtopic",id);
$http.get('/topics/'+id).then(function(response){
  topic = response.data.topic;
  console.log("topic length",response.data.topic.posts.length);
  console.log("response from showtopic factory", response.data);

  callback(topic);
})
}

factory.showUser = function(id,callback){
console.log("id from userfactory showuser",id);
$http.get('/users/'+id).then(function(response){
  // user = response.data.user;
  // console.log("topic length",response.data.topic.posts.length);
  console.log("response from showuser factory", response.data);

  callback(response);
})
}



// factory.showPost = function()

factory.savePost = function(id,post, callback){
  console.log("post",post);
  $http.post('/addpost/'+id, post).then(function(response){
    console.log("response from post controller", response.data);
    topic.posts.push(response.data.post);
    console.log("length", topic.posts.length);
    callback();

  })
}

factory.saveComment = function(id,comment,callback){
  console.log('comment',comment);
  $http.post('/addcomment/'+id, comment).then(function(response){
      for(var i=0; i<topic.posts.length; i++){
        if(topic.posts[i]._id == id){
          console.log(topic.posts[i]);
          topic.posts[i].comments.push(response.data.comment)
        }
      }
      console.log("id's",id);
    console.log("response from comment controller",response.data);
    callback(response);
  })
}

factory.addLike = function(id,post,callback){
  console.log('user',id);
  console.log('post',post);
  $http.post('/addlike/'+post).then(function(response){
    // for x in topic.posts{
    //   if(topic.posts)
    // }
    // console.log("posts in topic",topic.posts)
    for(var j =0; j<topic.posts.length; j++){
      if(topic.posts[j]._id == response.data.like._id){
        console.log(topic.posts[j]);
        topic.posts[j].like = response.data.like.like

      }
    }
    console.log("response is ",response.data);
    callback(response);
  })
}

factory.adddisLike = function(id,post,callback){
  console.log('user',id);
  console.log('post',post);
  $http.post('/adddislike/'+post).then(function(response){
    // for x in topic.posts{
    //   if(topic.posts)
    // }
    // console.log("posts in topic",topic.posts)
    for(var j =0; j<topic.posts.length; j++){
      if(topic.posts[j]._id == response.data.like._id){
        console.log(topic.posts[j]);
        topic.posts[j].dislike = response.data.like.dislike

      }
    }
    console.log("response is ",response.data);
    callback(response);
  })
}

return factory;
}]);
