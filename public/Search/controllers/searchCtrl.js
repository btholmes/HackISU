(function(){
    'use strict';

    angular.module("myApp" )
        .controller("searchCtrl",searchCtrl);

    searchCtrl.$inject = ['$scope', '$state', 'getResourcesService', 'ionicLoadbar'];

    function searchCtrl($scope, $state, $getResourcesService, $ionicLoadbar){
        var vm = this;
        vm.search = search;
        vm.searchItem;
        vm.results = [];


        function search(){

            $ionicLoadbar.show();
            $getResourcesService.getResources()
                .then(function(data) {
                    $ionicLoadbar.hide();
                    var result = data.data;

                    for(var i = 0; i < result.length; i++){
                        if(result[i].name == vm.searchItem){
                            var location = result[i].country + " , " + result[i].region + " , " + result[i].address;
                            vm.results.push({'address' : location  , 'name' : result[i].name });
                        }
                    }
                    // alert(JSON.stringify(vm.resources));
                });

        }

    }

})();
