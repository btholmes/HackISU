(function(){
    'use strict';

    angular.module("myApp" )
        .controller("loginCtrl",loginCtrl);

    loginCtrl.$inject = ['$scope'];

    function loginCtrl($scope){
        var vm = this;

        vm.page = "Login Page";

//        vm.clicking = clicking;
//
////         function example
//        function clicking(){
//            alert("Hello papi");
//        }

        // FireBase

//        var config = {
//            apiKey = "AIzaSyCkjl6KqOBYsAHhKmEF_qg_0actBrYfZaI",
//            authDomain = "la-busqueda.firebaseapp.com",
//            databaseURL = "https://la-busqueda.firebaseio.com",
//            storageBucket = "la-busqueda.appspot.com",
//
//        };

//        firebase.initializeApp(config);

//        var emailInput = document.getElementById('emailInput');
//        var passInput = document.getElementById('passInput');
//        var btnLogin = document.getElementById('btnLogin');
//        var btnSignUp = document.getElementById('btnSignUp');
//        var btnLogout = document.getElementById('btnLogOut');


        // login event
//        btnLogin.addEventListener('click', e => {
//            // Get email and pass
//            const email = emailInput.value;
//            const pass = passInput.value;
////            const auth = firebase.auth();
//
//            // Sign In
//            const promise = auth.SignInWithEmailAndPassword(email, pass);
//
//            promise.catch(e => console.log(e.message));
//        });


    }

})();
