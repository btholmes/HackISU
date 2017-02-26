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
		.state('menu', {
			url: '/menu',
			templateUrl: "menu.html",
			// controller : 'menuCtrl',
			// controllerAs: 'vm'
		})
		.state('menu.home', {
			url: "/mhome",
			views: {
				'menuContent': {
					templateUrl: "home/views/mHome.html",
					controller : 'homeCtrl',
					controllerAs: 'vm'
				}
			},
		})
			.state('menu.resources', {
				url: '/resources',
				views: {
					'menuContent': {
						templateUrl: 'Resources/views/resources.html',
						controller: 'resourcesCtrl',
						controllerAs: 'vm'
					}
				},
			})
			.state('menu.map', {
				url: '/map',
				views: {
					'menuContent': {
						templateUrl: 'main.webapp.app.googleMap/views/map.html',
						controller: 'mapCtrl',
						controllerAs: 'vm'
					}
				},
			})
		// .state('home', {
		// 	name: 'home',
		// 	url: '/home',
		// 	templateUrl: 'Home/views/home.html',
		// 	controller: 'homeCtrl',
		// 	controllerAs: 'vm'
		// })
		// .state('resources', {
		// 	name: 'resources',
		// 	url: '/resources',
		// 	templateUrl: 'Resources/views/resources.html',
		// 	controller: 'resourcesCtrl',
		// 	controllerAs: 'vm'
		// })
		.state('map', {
			name: 'map', 
			url: '/map', 
			templateUrl: 'main.webapp.app.googleMap/views/map.html',
			controller: 'mapCtrl',
			controllerAs: 'vm'
		});

		
	});