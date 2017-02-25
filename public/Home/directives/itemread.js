(function(){
    'use strict';

    angular.module("myApp" ).directive('itemread', itemread);

    // postCtrl.$inject = ['$http', 'imageService'];

    function itemread()
    {

        return {
            link: function(scope, element, attributes) {

                element.bind("change", function(changeEvent) {

                    var file = changeEvent.target.files[0];
                    var extension = file.name.substring(file.name.lastIndexOf('.'));

                    var validFileType = ".jpg , .png , .bmp";
                    if (validFileType.toLowerCase().indexOf(extension) < 0) {
                        alert("Please select either .jpg , .png , or .bmp file");
                        return false;
                    }
                    else{
                        var reader = new FileReader();
                        reader.onload = function(loadEvent) {
                            scope.$apply(function() {
                                scope.vm.uploadItem = reader.result;
                            });
                        }
                        reader.readAsDataURL(changeEvent.target.files[0]);
                    }



                });
            }
        }


    }

})();

