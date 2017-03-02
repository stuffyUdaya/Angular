myApp.controller('topicController',['$scope','userFactory','$http','$location','$routeParams','$cookies',function($scope,userFactory,$http,$location,$routeParams,$cookies){

$scope.saveTopic = function(user){
  console.log(user);
  $scope.newtopic.user = user;
  userFactory.addTopic($scope.newtopic,function(data){
    userFactory.showall(function(topics){
      console.log("from topics controller getting all topics", topics);
      $scope.topics = topics.data.topics

    })

    console.log("data from topic controller",data);
    $scope.newtopic ={};
  })
}

userFactory.showall(function(topics){
  console.log("from topics controller getting all topics", topics);
  $scope.topics = topics.data.topics

})




}])
