myApp.controller('dosomeController',['$scope','userFactory','$http','$location','$routeParams',function($scope,userFactory,$http,$location,$routeParams){

  $scope.random = function(){
    console.log("parameters from random one are", $scope.number)
    userFactory.random($scope.number, function(data){
      console.log("parameters from random controller were", $scope.number);
      console.log("data coming from factory was", data);
      $scope.rand = "The random number generated was "+data
    })

$scope.number = {}
  }
}])
