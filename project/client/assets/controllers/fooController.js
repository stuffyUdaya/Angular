myApp.controller('fooController',['$scope','userFactory','$http','$location','$routeParams',function($scope,userFactory,$http,$location,$routeParams){

$scope.foo = function(){
  console.log("data from foo controller",$scope.number);
  userFactory.foo($scope.number,function(data){
    console.log("foo params", $scope.number);
    console.log("data coming from factory", data);
    $scope.foodata = data;
  })
  $scope.number = {}
}



}]);
