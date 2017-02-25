(function(){
    'use strict';

    angular.module("myApp" )
        .controller("loginCtrl",loginCtrl);

    loginCtrl.$inject = ['$scope'];

    function loginCtrl($scope){
        var vm = this;

        vm.fuck = "oh yeah";



    }

})();
