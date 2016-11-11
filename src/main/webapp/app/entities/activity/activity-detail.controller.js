(function() {
    'use strict';

    angular
        .module('skynetApp')
        .controller('ActivityDetailController', ActivityDetailController);

    ActivityDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity'];

    function ActivityDetailController($scope, $rootScope, $stateParams, entity) {
        var vm = this;
        vm.activity = entity;

        var unsubscribe = $rootScope.$on('skynetApp:activityUpdate', function(event, result) {
            vm.activity = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();