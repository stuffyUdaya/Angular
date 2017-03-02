var myApp = angular.module('myApp', ['ngRoute','ngCookies']);
test = 0;
myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/index',{
        templateUrl: 'partials/homepage.html',

    })

    .when('/reg',{
      templateUrl: 'partials/reg.html',
      controller:'regController'
  })

  .when('/login',{
      templateUrl: 'partials/login.html',
      controller:'logController'
  })

  .when('/loggedin',{
      templateUrl: 'partials/loggedin.html',

  })

  .when('/topic/:id',{

      templateUrl: 'partials/topic.html',
      
  })

  .when('/user/:id',{

      templateUrl : 'partials/user.html',
      controller : 'showuserController'
  })

  // .when('/addpost/:id',{
  //     templateUrl: 'partials/loggedin.html',
  //     controller:'postController'
  // })

  .otherwise({
          redirectTo: '/index'
        });



});
