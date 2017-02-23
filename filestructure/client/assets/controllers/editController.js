myApp.controller('editController',['$scope','userFactory','$http','$location','$routeParams',function($scope,userFactory,$http,$location,$routeParams){

  $scope.data = [];

  userFactory.showUser($routeParams.id,function(data){

    $scope.data = data;
    $scope.user= $scope.data.users[0];
    console.log('hello');
    console.log("Scope",$scope.data)
    $scope.updateuser = {fname: $scope.user.fname, lname:$scope.user.lname}
  });


  $scope.updateUser = function(){

    userFactory.updateUser($routeParams.id,$scope.updateuser);
    console.log($scope.updateuser);
    $scope.updateuser={};
    $location.url('/')

  }

    }]);
