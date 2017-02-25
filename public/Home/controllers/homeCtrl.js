(function(){
    'use strict';

    angular.module("myApp" )
        .controller("homeCtrl",homeCtrl);

    homeCtrl.$inject = ['$scope', '$timeout', 'ionicLoadbar', 'imageService'];

    function homeCtrl($scope, $timeout, $ionicLoadbar, $imageService){
        var vm = this;
        vm.init = init;
        vm.post = post;
        vm.createID = createID;
        vm.checkImage = checkImage;
        vm.country;
        vm.page = "Home Page";
        vm.profileImage = "";
        vm.uploadMe = "";
        vm.uniqueID;



        function init(){
            vm.profileImage = "../images/gitHub.png"
            $('.mainNavbar').css("opacity", "1");

            $timeout(function(){
                $('.mainNavbar').css("display", "block");
            }, 500);

        }

        function post() {
            // if(checkCityState() && checkDescription()){
                if(checkImage()){
                    $ionicLoadbar.show();
                    createID();
                    $imageService.storeImage(vm.uploadMe, "Ames,IA", "Just Testing now", vm.uniqueID)
                        .then(function(data) {
                            $ionicLoadbar.hide();
                            alert("Posted Successfully");
                            alert(JSON.stringify(data));
                            localStorage.setItem("newImage", 1);
                            // vm.cityState = "";
                            // vm.description = "";
                            // vm.uploadMe = "";
                        });
                }else{
                    alert("Plase upload an image in .jpg .bmp or .png format");
                }
            // }
        }


        function createID(){
            var date = new Date();
            var components = [
                date.getYear(),
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
                date.getMilliseconds()
            ];
            vm.uniqueID = components.join("");
        }

        function checkImage(){
            if(vm.uploadMe != undefined){
                return true;
            }

            return false;

        }





        vm.init();

    }

})();
