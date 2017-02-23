var myApp = angular.module('myApp', ['ngRoute']);
//  use the config method to set up routing:
myApp.config(function ($routeProvider) {
  $routeProvider

  .when('/',{
      templateUrl: 'partials/showall.html',
      controller:'userController'
  })
  .when('/new',{
      templateUrl: 'partials/newuser.html',
      controller:'userController'
  })
  .when('/show/:id',{
      templateUrl: 'partials/showuser.html',
      controller:'showController'
  })

  .when('/edit/:id',{
      templateUrl: 'partials/edituser.html',
      controller:'editController'
  })

  .when('/delete/:id',{
      templateUrl: 'partials/showall.html',
      controller:'deleteController'
  })

});
