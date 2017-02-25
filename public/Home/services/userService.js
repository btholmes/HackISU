(function(){
    'use strict';

    angular.module("myApp" ).service("userService", userService);

    userService.$inject = ['$http','CONSTANTS'];

    function userService($http, CONSTANTS) {

        var sv = this;
        sv.storeUser = storeUser;
        sv.getUserInfo = getUserInfo;

        function storeUser(image, myCountry, myRegion, uniqueID, picType, user) {
            return $http({
                method: 'POST',
                url: "../Php/store_user.php",
                // url: "./php/putImageInDirectory.php",
                data: {
                    'item' : image,
                    'country' : myCountry,
                    'region' : myRegion,
                    'id' : uniqueID,
                    'type' : picType,
                    'email' : user
                }
            });
        }

        function getUserInfo(){
            return $http({
                method: 'GET',
                url: "../Php/get_user.php"
                // url: "./php/putImageInDirectory.php",
            });

        }


    }

})();