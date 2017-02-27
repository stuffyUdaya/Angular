myApp.controller('commentController',['$scope','userFactory','$http','$location','$routeParams','$cookies',function($scope,userFactory,$http,$location,$routeParams,$cookies){

$scope.addComment = function(cuser,post){
  console.log(cuser);
  console.log(post);
  $scope.newcomment.cuser = cuser;
  $scope.newcomment.post = post;
  userFactory.saveComment($scope.newcomment, function(data){
    console.log("passed through comment controller",data);

    $scope.newcomment = {};


  })

}


}])
