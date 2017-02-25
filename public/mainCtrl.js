(function(){
	'use strict';
		
	angular.module("myApp" )
	.controller("mainCtrl",mainCtrl);  
			
	mainCtrl.$inject = ['$timeout'];
	
	function mainCtrl($timeout){
		var vm = this;

		angular.element(document).ready(function() {
			var scrollTop = 0;
			$(window).scroll(function(){
				scrollTop = $(window).scrollTop();
<<<<<<< HEAD
				if (scrollTop >= 100) {
					$('.mainNavbar').addClass('scrolled');

					$timeout(function(){
						$('.mainNavbar').css('display', 'none');
					}, 500);

				} else if (scrollTop < 100) {
					$('.mainNavbar').css('display', 'block');
					// $('.mainNavbar').removeClass('scrolled');

					$timeout(function(){
						$('.mainNavbar').removeClass('scrolled');
					}, 1000);
=======
				if (scrollTop >= 150) {
					$('.mainNavbar').addClass('scrolled');
				} else if (scrollTop < 150) {
						$('.mainNavbar').removeClass('scrolled');
>>>>>>> ecc18fe9946c82f21b02118647e5a147f8ffedb8
				}

			});
		});

	}
})(); 