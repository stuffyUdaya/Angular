myApp.controller('userController',['$scope','userFactory','$http','$location',function($scope,userFactory,$http,$location){

        // $scope.users =[];
        $scope.saveUser = function(){
          $location.url('/')
          userFactory.saveUser($scope.newUser);
          console.log($scope.newUser);
          $scope.newUser={};

        }
        $scope.users =[];
        userFactory.showAll(function(users){
          console.log('hello');
          $scope.users = users;
          console.log("Scope",$scope.users)
        });


        // $scope.findOne = function(id){
        //   console.log("id is",id);
        // userFactory.showOne(id, function(data){
        //   console.log("data isgudeftyyt",data.users[0].fname);
        //   $scope.data = data;
        //   console.log($scope.data)
        //   var id = $scope.data.users[0]._id
        //
        // })
        // $location.url('/show/'+id)
        //
        //
        // }


      }]);
