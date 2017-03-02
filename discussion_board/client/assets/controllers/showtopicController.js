myApp.controller('showtopicController',['$scope','userFactory','$http','$location','$routeParams','$cookies',function($scope,userFactory,$http,$location,$routeParams,$cookies){
  $scope.newcomment= {};

userFactory.showTopic($routeParams.id, function(topic){
  console.log("routeparams",$routeParams.id)
$scope.topic = topic;
  console.log("data from showtopic controller",$scope.topic)
})

$scope.addPost = function(id,user){
  console.log(user);
console.log(id);
$scope.newpost.user = user;
  userFactory.savePost(id,$scope.newpost,function(data){
    console.log("data from show topic controller", data);
    // userFactory.showTopic($routeParams.id, function(data){
    //   console.log("routeparams",$routeParams.id)
    // $scope.topics = data.data.posts;
    //   console.log("data from showtopic controller",$scope.topics)
    // })
    $scope.newpost = {};

  })
}

$scope.addComment = function(id,c_user){

  console.log(id);
  console.log(c_user);
  console.log($scope.newcomment[id])
  $scope.newcomment[id].user =c_user;
  userFactory.saveComment(id,$scope.newcomment[id],function(data){
    console.log($scope.newcomment);
    console.log("data from save comment function",data);

    $scope.newcomment = {};
  })


}

$scope.Like = function(id,post,user_post){
  console.log(id);
  console.log(post);
  console.log("user id of the guy whoposted",user_post);
  userFactory.addLike(id,post,user_post,function(data){
    console.log(id);
    console.log(post);
    console.log("data from like", data);
  })
}

$scope.disLike = function(id,post,user_post){
  userFactory.adddisLike(id,post,user_post,function(data){
    console.log("data from dislike",data);
  })
}


}])
