(function(){
    'use strict';

    angular.module("myApp" )
        .controller("homeCtrl",homeCtrl);

    homeCtrl.$inject = ['$scope', '$timeout', 'ionicLoadbar', 'userService'];

    function homeCtrl($scope, $timeout, $ionicLoadbar, $userService){
        var vm = this;
        vm.init = init;
        vm.upload = upload;
        vm.createID = createID;
        vm.checkImage = checkImage;
        vm.getUserInfo = getUserInfo;
        vm.country;
        vm.region;
        vm.page = "Home Page";
        vm.profileImage = "";
        vm.uploadMe = "";
        vm.uniqueID;

        vm.itemImage;
        vm.uploadItem;
        vm.userObj = {};

        vm.currentUser;


        function init(){
            // vm.profileImage = "../images/gitHub.png"
            $('.mainNavbar').css("opacity", "1");

            $timeout(function(){
                $('.mainNavbar').css("display", "block");
            }, 500);

//            alert(firebase.auth().currentUser.email);
            vm.currentUser = firebase.auth().currentUser.email;
            getUserInfo();
        }

        function getUserInfo(){

            $ionicLoadbar.show();
            $userService.getUserInfo()
                .then(function(data){
                    $ionicLoadbar.hide();
                    var results = [];
                    results = data.data;
                    for(var i in results){
                        if(results[i].user == vm.currentUser){
                            vm.profileImage = results[i].url;
                            vm.userObj = results[i];
                            break;
                        }
                    }

                });
        }


        function upload() {
            // if(checkCityState() && checkDescription()){
                if(checkImage()){
                    $ionicLoadbar.show();
                    createID();
                    $userService.storeUser(vm.uploadMe, vm.country, vm.region, vm.uniqueID, "ProfilePic", vm.currentUser)
                        .then(function(data) {
                            $ionicLoadbar.hide();
                            vm.profileImage = vm.uploadMe;
                            localStorage.setItem("newImage", 1);
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
