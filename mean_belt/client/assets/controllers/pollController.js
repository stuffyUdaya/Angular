myApp.controller('pollController',['$scope','userFactory','$http','$location','$routeParams','$cookies',function($scope,userFactory,$http,$location,$routeParams,$cookies){

$scope.savePoll = function(user){
  console.log(user);
  $scope.newpoll.user = user;
  userFactory.addPoll($scope.newpoll,function(data){
    console.log("data from pollcontroller", data);
    $location.url('/loggedin')
    $scope.newpoll = {};
  })
}

userFactory.showPolls(function(polls){
  console.log("from polls controller getting all topics", polls);
  $scope.polls = polls


})

$scope.deletePoll = function(poll){
  console.log("id of the poll", poll);
  userFactory.deletePoll(poll,function(data){
    userFactory.showPolls(function(polls){
      console.log("from polls controller getting all topics", polls);
      $scope.polls = polls


    })

  })
}



}]);
