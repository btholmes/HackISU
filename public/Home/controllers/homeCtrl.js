(function(){
    'use strict';

    angular.module("myApp" )
        .controller("homeCtrl",homeCtrl);

    homeCtrl.$inject = ['$scope', '$timeout', 'ionicLoadbar', 'imageService'];

    function homeCtrl($scope, $timeout, $ionicLoadbar, $imageService){
        var vm = this;
        vm.init = init;
        vm.upload = upload;
        vm.uploadItemImage = uploadItemImage;
        vm.createID = createID;
        vm.checkImage = checkImage;
        vm.getuserInfo = getUserInfo;
        vm.country;
        vm.region;
        vm.page = "Home Page";
        vm.profileImage = "";
        vm.uploadMe = "";
        vm.uniqueID;

        vm.itemImage;
        vm.uploadItem;
        vm.itemName;
        vm.itemDesc;



        function init(){
            // vm.profileImage = "../images/gitHub.png"
            $('.mainNavbar').css("opacity", "1");

            $timeout(function(){
                $('.mainNavbar').css("display", "block");
            }, 500);

            getUserInfo();
        }

        function getUserInfo(){


        }

        function uploadItemImage() {

            if(vm.uploadItem != undefined){
                $ionicLoadbar.show();
                createID();
                $imageService.storeImage(vm.uploadItem, "Ames,IA", "Just Testing now", vm.uniqueID, "itemPic")
                    .then(function(data) {
                        $ionicLoadbar.hide();
                        vm.itemImage = vm.uploadItem;
                        // alert("Posted Successfully");
                        // alert(JSON.stringify(data));
                        localStorage.setItem("newImage", 1);
                        // vm.country = "";
                        // vm.region = "";
                        // vm.description = "";
                        vm.uploadItem = "";
                    });
            }
        }

        function upload() {
            // if(checkCityState() && checkDescription()){
                if(checkImage()){
                    $ionicLoadbar.show();
                    createID();
                    $imageService.storeUser(vm.uploadMe, vm.country, vm.region, vm.uniqueID, "ProfilePic")
                        .then(function(data) {
                            $ionicLoadbar.hide();
                            vm.profileImage = vm.uploadMe;
                            // alert("Posted Successfully");
                            // alert(JSON.stringify(data));
                            localStorage.setItem("newImage", 1);
                            // vm.country = "";
                            // vm.region = "";
                            // vm.description = "";
                            vm.uploadMe = "";
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
