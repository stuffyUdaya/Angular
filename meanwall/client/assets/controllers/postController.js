myApp.controller('postController',['$scope','userFactory','$http','$location','$routeParams','$cookies',function($scope,userFactory,$http,$location,$routeParams,$cookies){
  // $scope.newpost.user_id = $routeParams.id;
$scope.posts = [];
userFactory.showAll(function(messages){
    console.log('hello you are in showall controller');
    $scope.posts = messages.messages;
    console.log("Scope",$scope.posts)
            })


$scope.addPost = function(user){
console.log(user);
$scope.newpost.user = user;
  userFactory.savePost($scope.newpost, function(data){
    console.log("passed through post controller",data);
    $location.url('#!/loggedin')
    $scope.newpost = {};
})

};



}
]);
