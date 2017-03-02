myApp.controller('showuserController',['$scope','userFactory','$http','$location','$routeParams','$cookies',function($scope,userFactory,$http,$location,$routeParams,$cookies){

userFactory.showUser($routeParams.id, function(user){
  $scope.user =user.data;
  console.log("data from show user controller", $scope.user.user)
})

}])
