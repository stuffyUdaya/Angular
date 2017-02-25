myApp.controller('regController',['$scope','userFactory','$http','$location','$routeParams','$cookies',function($scope,userFactory,$http,$location,$routeParams,$cookies){

$scope.saveUser = function(){
        if ($scope.newUser.password == $scope.newUser.Confpassword){
        console.log('password', $scope.newUser.password,"confpass",$scope.newUser.Confpassword)
        userFactory.saveUser($scope.newUser,function(data){
          console.log($scope.newUser);
          $scope.newUser={};
          $scope.Confpassword={};
          $scope.data = data;
          console.log("data from controller",$scope.data)
          console.log($scope.data.errors.email.message);
          $location.url('/reg');
        });

      }
    else{
      console.log('hi wrong')
      $scope.message = "Passwords don't  match";
      $location.url('/reg')
    }

}




}]);
