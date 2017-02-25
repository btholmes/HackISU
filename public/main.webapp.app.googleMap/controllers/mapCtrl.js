(function(){
	'use strict'; 
	
	angular.module("myApp" )
	.controller("mapCtrl",mapCtrl);  
	
	mapCtrl.$inject = ['Map', '$scope', '$timeout', 'getResourcesService', 'ionicLoadbar'];
	
	function mapCtrl(Map, $scope, $timeout, $getResourcesService, $ionicLoadbar){
		var vm = this;
		vm.init = init;
		vm.getResources = getResources;
		vm.addResourceMarkers = addResourceMarkers;
	    vm.place = {};
	    vm.search = search;
		vm.searchSpecific = searchSpecific;
	    vm.send = send; 
	    vm.nearbyPlaces = nearbyPlaces; 
	    vm.clearRoute = clearRoute; 
	    vm.center = center; 
	    vm.clearUnMarked = clearUnMarked;
	    vm.goHere = goHere; 
	    vm.distance = distance; 
	    vm.mark = mark;
	    vm.unMark = unMark; 
	    vm.index = 0;
		vm.resources = [];
//	    var htmlElement = '<button ng-click="vm.goHere()" class="btn btn-success">Test</button>';
//	    var compiled = $compile(htmlElement);


		vm.init();


		function init(){
			$('.mainNavbar').css("opacity", "1");

			$timeout(function(){
				$('.mainNavbar').css("display", "block");
			}, 500);

			getResources();

		}

		function getResources(){

			$ionicLoadbar.show();
			$getResourcesService.getResources()
				.then(function(data) {
					$ionicLoadbar.hide();
					vm.resources = data.data;

					addResourceMarkers();
				});

		}

		function addResourceMarkers() {
			for(var i = 0; i < vm.resources.length; i++){
				var location = vm.resources[i].country + ", " + vm.resources[i].region + ", " + vm.resources[i].address;
				// alert(location);
				searchSpecific(location, vm.resources[i].name, vm.resources[i].description);
			}
		}

	    $scope.service = Map; 
	    
	    function search() {

	        vm.apiError = false;
	        Map.search(vm.searchPlace)
	        .then(
	            function(res) { // success
	                Map.addHomeMarker(res);
	                vm.place.name = res.name;
	                vm.place.lat = res.geometry.location.lat();
	                vm.place.lng = res.geometry.location.lng();
	                
	                Map.lat = res.geometry.location.lat(); 
	                Map.lng = res.geometry.location.lng(); 
	                 
	            },
	            function(status) { // error
	                vm.apiError = true;
	                vm.apiStatus = status;
	            }
	           
	        );
	    }

	    function searchSpecific(place, name, desc){
			vm.apiError = false;
			Map.search(place)
				.then(
					function(res) { // success
						Map.addPlace(res, name, desc);

					},
					function(status) { // error
						vm.apiError = true;
						vm.apiStatus = status;
					}

				);
		}
	    
	   function send() {
	        // alert(vm.place.name + ' : ' + vm.place.lat + ', ' + vm.place.lng);
	    }
	   
	   function nearbyPlaces(store, radius) {
		   radius = radius * 1609.34; 
		   Map.nearbyPlaces(store, radius); 
	   }
	   
	   function clearRoute() {
		   Map.clearRoute(); 
		    
//		   Map.directionDisplays = null; 
	   }
	   
	   function center() {
		   Map.map.setCenter({lat: Map.lat, lng: Map.lng}); 
	   }
	   
	   function clearUnMarked() {
		   Map.clearUnMarked(); 
	   }
	   
	   function goHere(marker) {
		   clearRoute(); 
		   Map.goHere(marker); 
	   }
	   
	   function distance(marker) {
		   Map.distance(marker); 
	   }
	   
	   function mark(marker) {
		   Map.mark(marker); 
	   }
	   
	   function unMark(marker) {
		   Map.unMark(marker); 
	   }
	   

// 	   $scope.$watch('service.getAllPlacesLength()', function(){
//		   if(Map.getAllPlacesLength() > 0)
//		   {
//			  var place = Map.allPlaces.pop(); 
//			  Map.showMarkers($scope, place); 		   
//		   }
//	   }); 
 	   
 	   $scope.$watch('service.getMarkersLength()', function(){
// 		   alert('in watch  ' + Map.currentMarkers.length); 
		   if(Map.getMarkersLength() > 0)
		   {
				   var marker = Map.currentMarkers.pop(); 
				   Map.showMarkersWithMarker($scope, marker, marker.mark); 
		   }
	   }); 
	   
	   Map.init(); 
	}
	
})(); 
