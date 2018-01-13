(function () {
    'use strict';

    angular
        .module('ivan')
        .controller('RideVanController', UserSelectionController);

    /** @ngInject */
    function UserSelectionController($http, $state) {
        var vm = this;

        //Methods
        vm.book = book;

        function book(location) {
            $state.go('search-list');
        }
    }
})();
