(function(){
    'use strict';

    angular.module("myApp" )
        .controller("homeCtrl",homeCtrl);

    homeCtrl.$inject = ['$scope', '$timeout'];

    function homeCtrl($scope, $timeout){
        var vm = this;
        vm.init = init;
        vm.page = "Home Page";
        vm.profileImage = "";
        vm.uploadMe = "";



        function init(){
            vm.profileImage = "../images/gitHub.png"
            $('.mainNavbar').css("opacity", "1");

            $timeout(function(){
                $('.mainNavbar').css("display", "block");
            }, 500);

        }



        vm.init();

    }

})();
