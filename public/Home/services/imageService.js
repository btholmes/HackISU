(function(){
    'use strict';

    angular.module("myApp" ).service("imageService", imageService);

    imageService.$inject = ['$http','CONSTANTS'];

    function imageService($http, CONSTANTS) {

        var sv = this;
        sv.storeImage = storeImage;

        function storeUser(image, myCountry, myRegion, uniqueID, picType) {
            return $http({
                method: 'POST',
                url: "../Php/store_user.php",
                // url: "./php/putImageInDirectory.php",
                data: {
                    'item' : image,
                    'country' : myCountry,
                    'region' : myRegion,
                    'id' : uniqueID,
                    'type' : picType
                }
            });
        }


    }

})();