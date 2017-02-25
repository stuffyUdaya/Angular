var myApp = angular.module('myApp', ['ngRoute','ngCookies']);

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

  // .when('/addpost/:id',{
  //     templateUrl: 'partials/loggedin.html',
  //     controller:'postController'
  // })

  .otherwise({
          redirectTo: '/index'
        });



});
