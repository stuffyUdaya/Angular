myApp.controller('addController',['$scope','userFactory','$http','$location','$routeParams',function($scope,userFactory,$http,$location,$routeParams){


$scope.add = function(){

  userFactory.add($scope.number,function(data){
    console.log("number from add controller", $scope.number);
    console.log("response from the add controller is ", data)
    $scope.sum = "The sum is "+data;
    console.log("response from the add controller is ", $scope.sum)
  })

$scope.number = {};

}

}]);
