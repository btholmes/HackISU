(function(){
    'use strict';

    angular.module("myApp" ).service("imageService", imageService);

    imageService.$inject = ['$http','CONSTANTS'];

    function imageService($http, CONSTANTS) {

        var sv = this;
        sv.storeImage = storeImage;

        function storeImage(image, name, desc, uniqueID) {
            return $http({
                method: 'POST',
                url: "../Php/store_image.php",
                // url: "./php/putImageInDirectory.php",
                data: {
                    'item' : image,
                    'name' : name,
                    'description' : desc,
                    'id' : uniqueID
                }
            });
        }


    }

})();