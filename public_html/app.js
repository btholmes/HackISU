angular.module("myApp", ['ui.router', 'ngAnimate'])
	.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/login');
		
		$stateProvider
		.state('login', {
			name: 'login',
			url: '/login',
			templateUrl: 'Login/views/login.html',
			controller: 'loginCtrl',
			controllerAs: 'vm'
		})
		.state('places', {
			name: 'places',
			url: '/places',
			templateUrl: 'Places/views/places.html',
			controller: 'placesCtrl',
			controllerAs: 'vm'
		})
		.state('map', {
			name: 'map', 
			url: '/map', 
			templateUrl: 'Map/views/map.html',
			controller: 'mapCtrl',
			controllerAs: 'vm'
		});

		
	});