var myApp = angular.module('myApp', ['ngRoute']);
test = 0;
myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/index',{
        templateUrl: 'partials/homepage.html',

    })

    .when('/add',{
      templateUrl: 'partials/add.html',
      controller:'addController'
  })

  .when('/subtract',{
      templateUrl: 'partials/subtract.html',
      controller:'subController'
  })

  .when('/foo',{
      templateUrl: 'partials/foo.html',
      controller: 'fooController'

  })

  .when('/dosome',{
      templateUrl: 'partials/random.html',
      controller: 'dosomeController'

  })
  .when('/poll/:id',{

        templateUrl: 'partials/poll.html',

    })




  // .when('/addpost/:id',{
  //     templateUrl: 'partials/loggedin.html',
  //     controller:'postController'
  // })

  .otherwise({
          redirectTo: '/index'
        });



});
