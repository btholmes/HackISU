(function(){
    'use strict';

    angular.module("myApp" )
        .controller("placesCtrl",placesCtrl);

    placesCtrl.$inject = ['$scope', '$timeout'];

    function placesCtrl($scope, $timeout){
        var vm = this;
        vm.init = init;



        function init(){
            $('.mainNavbar').css("opacity", "0");

            $timeout(function(){
                $('.mainNavbar').css("display", "none");
            }, 500);

        }



        vm.init();

    }

})();