(function () {
    'use strict';

    angular
        .module('ivan')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($http, $state) {
        var vm = this;

        //Methods
        vm.login = login;

        vm.credentials = {};

        function login(credentials) {
            if(credentials.contact === 'user') {
                $state.go('user-selection');
            }
        }
    }
})();
