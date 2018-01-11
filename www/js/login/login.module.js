angular.module('ivan', [])
.config(function ($routeProvider) {

    $routeProvider
            // .when('/', {
            //     controller: 'HomeController',
            //     templateUrl: 'home/home.view.html',
            //     controllerAs: 'vm'
            // })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'js/login/login.html',
                controllerAs: 'vm'
            })

            // .when('/register', {
            //     controller: 'RegisterController',
            //     templateUrl: 'register/register.view.html',
            //     controllerAs: 'vm'
            // })

            .otherwise({ redirectTo: '/login' });
  });