(function () {
    'use strict';

    angular
        .module('ivan')
        .controller('CreateRouteController', CreateRouteController);

    /** @ngInject */
    function CreateRouteController($http, $state) {
        var vm = this;

        //Methods
        vm.create = create;

        function create(location) {
            $state.go('search-list');
        }
    }
})();
