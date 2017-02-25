(function(){
    'use strict';

    angular.module("myApp" ).service("getResourcesService", getResourcesService);

    getResourcesService.$inject = ['$http','CONSTANTS'];

    function getResourcesService($http, CONSTANTS) {

        var sv = this;
        sv.getResources = getResources;
        sv.storeItem = storeItem;

        function getResources() {
            return $http({
                method: 'POST',
                // url: CONSTANTS.get_images_url
                url: "../Php/get_resources.php"
            });
        }

        function storeItem(image, myCountry, myRegion, myAddress, myName, desc, uniqueID, picType) {
            return $http({
                method: 'POST',
                url: "../Php/store_item.php",
                // url: "./php/putImageInDirectory.php",
                data: {
                    'item' : image,
                    'country' : myCountry,
                    'region' : myRegion,
                    'address' : myAddress,
                    'name' : myName,
                    'description' : desc,
                    'id' : uniqueID,
                    'type' : picType
                }
            });
        }

    }

})();