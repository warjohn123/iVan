// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ivan', [
    'ionic',
    'ngRoute'
])

    .run(function ($ionicPlatform, $rootScope, $location) {
        $rootScope.location = $location
        $rootScope.platform = ionic.Platform.platform();
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('start', {
                url: '/',
                templateUrl: 'js/start/start.html',
                controller: 'StartController',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'js/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'js/register/register.html',
                controller: 'RegisterController',
                controllerAs: 'vm'
            })
            .state('user-selection', { //down all for user selection routes
                url: '/user-selection',
                templateUrl: 'js/user-selection/user-selection.html',
                controller: 'UserSelectionController',
                controllerAs: 'vm'
            })
            .state('ride-van', {
                url: '/ride-van',
                templateUrl: 'js/user-selection/ride-van/ride-van.html',
                controller: 'RideVanController',
                controllerAs: 'vm'
            })
            .state('search-list', {
                url: '/search-list',
                templateUrl: 'js/user-selection/ride-van/search-list/search-list.html',
                controller: 'SearchListController',
                controllerAs: 'vm'
            })
            .state('search-route', {
                url: '/search-route',
                templateUrl: 'js/user-selection/search-route/search-route.html',
                controller: 'SearchRouteController',
                controllerAs: 'vm'
            })
            .state('admin-selection', {
                url: '/admin-selection',
                templateUrl: 'js/admin-selection/admin-selection.html',
                controller: 'AdminSelectionController',
                controllerAs: 'vm'
            })
            .state('view-route', {
                url: '/view-route',
                templateUrl: 'js/admin-selection/view-route/view-route.html',
                controller: 'AdminSelectionController',
                controllerAs: 'vm'
            });
    });