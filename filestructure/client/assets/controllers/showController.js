myApp.controller('showController',['$scope','userFactory','$http','$location','$routeParams',function($scope,userFactory,$http,$location,$routeParams){

  $scope.data = [];

  userFactory.showUser($routeParams.id,function(data){

    console.log('hello');
    $scope.data = data;
    console.log("Scope",$scope.data)
  });

    }]);
