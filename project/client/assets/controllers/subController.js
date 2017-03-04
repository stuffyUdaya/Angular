myApp.controller('subController',['$scope','userFactory','$http','$location','$routeParams',function($scope,userFactory,$http,$location,$routeParams){

  $scope.sub = function(){
    console.log("parameters from sub controller", $scope.number);
    userFactory.sub($scope.number,function(data){
      console.log("numbers passing to the factory", $scope.number);
      console.log("data came from factory for sub",data);
      $scope.diff = "The difference is "+data
    })
  }

}]);
