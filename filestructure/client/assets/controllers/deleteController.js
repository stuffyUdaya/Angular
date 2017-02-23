myApp.controller('deleteController',['$scope','userFactory','$http','$location','$routeParams',function($scope,userFactory,$http,$location,$routeParams){


      $location.url('/');
      userFactory.deleteUser($routeParams.id);
      console.log(routeParams.id);




}]);
