(function(){
    'use strict';

    angular.module("myApp" )
        .controller("resourcesCtrl",resourcesCtrl);

    resourcesCtrl.$inject = ['$scope', '$timeout', 'ionicLoadbar', 'getResourcesService'];

    function resourcesCtrl($scope, $timeout, $ionicLoadbar, $getResourcesService){
        var vm = this;
        vm.init = init;
        vm.getResources = getResources;
        vm.uploadResource = uploadResource;
        vm.createID = createID();
        vm.resources = [];
        vm.itemImage;
        vm.uploadItem;
        vm.region;
        vm.country;
        vm.itemName;
        vm.itemDesc;

        vm.uniqueID;




        function init(){
            $('.mainNavbar').css("opacity", "1");

            $timeout(function(){
                $('.mainNavbar').css("display", "block");
            }, 500);

            vm.getResources();
        }

        function getResources(){

            $ionicLoadbar.show();
            $getResourcesService.getResources()
                .then(function(data) {
                    $ionicLoadbar.hide();
                    vm.resources = data.data;

                    // alert(JSON.stringify(vm.resources));
                });

        }

        function uploadResource() {

            if(vm.uploadItem != undefined){
                $ionicLoadbar.show();
                createID();
                // alert(vm.uploadItem + " "+  vm.country + " " + vm.region + " " + vm.itemName + " " + vm.itemDesc + " " + vm.uniqueID);
                $getResourcesService.storeItem(vm.uploadItem, vm.country, vm.region, vm.itemName, vm.itemDesc, vm.uniqueID, "itemPic")
                    .then(function(data) {
                        $ionicLoadbar.hide();
                        // alert("Posted Successfully");
                        alert(JSON.stringify(data));
                        // localStorage.setItem("newImage", 1);
                        vm.country = "";
                        vm.region = "";
                        vm.itemName = "";
                        vm.itemDesc = "";
                        vm.uploadItem = "";
                        vm.itemImage = "";
                    });
            }
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



        vm.init();

    }

})();