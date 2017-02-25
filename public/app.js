angular.module("myApp", ['ui.router', 'ngAnimate', 'ionic'])
	.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
		.state('login', {
			name: 'login',
			url: '/login',
			templateUrl: 'Login/views/login.html',
			controller: 'loginCtrl',
			controllerAs: 'vm'
		})
		.state('home', {
			name: 'home',
			url: '/home',
			templateUrl: 'Home/views/home.html',
			controller: 'homeCtrl',
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