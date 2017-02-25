angular.module("myApp", ['ui.router', 'ngAnimate', 'ionic'])
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
		.state('home', {
			name: 'home',
			url: '/home',
			templateUrl: 'Home/views/home.html',
			controller: 'homeCtrl',
			controllerAs: 'vm'
		})
		.state('resources', {
			name: 'resources',
			url: '/resources',
			templateUrl: 'Resources/views/resources.html',
			controller: 'resourcesCtrl',
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