(function(){
    'use strict';

    angular.module("myApp" )
        .controller("loginCtrl",loginCtrl);

    loginCtrl.$inject = ['$scope'];

    function loginCtrl($scope){
        var vm = this;

        vm.page = "Login Page Fuck the Police";
        vm.fuck = "oh yeah";



    }

})();
