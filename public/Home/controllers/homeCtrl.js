(function(){
    'use strict';

    angular.module("myApp" )
        .controller("homeCtrl",homeCtrl);

    homeCtrl.$inject = ['$scope', '$timeout'];

    function homeCtrl($scope, $timeout){
        var vm = this;
        vm.init = init;
        vm.page = "Home Page";




        function init(){
            $('.mainNavbar').css("opacity", "0");

            $timeout(function(){
                $('.mainNavbar').css("display", "none");
            }, 500);

        }



        vm.init();

    }

})();
