(function(){
    'use strict';

    angular.module("myApp" )
        .controller("loginCtrl",loginCtrl);

    loginCtrl.$inject = ['$scope', '$state'];

    function loginCtrl($scope, $state){
        var vm = this;
        vm.signIn = signIn;
        vm.register = register;
        vm.signInWithGoogle = signInWithGoogle;
        vm.signOut = signOut;

        vm.page = "Login Page";
        vm.Email;
        vm.Password;
        vm.User;

        function signIn(){
            var error = false;
        // alert("in sign in" + vm.Email + " " + vm.Password);
              if (!vm.Email || !vm.Password) {
                return console.log('email and password required');
              }
              // Sign in user
              firebase.auth().signInWithEmailAndPassword(vm.Email, vm.Password)
                .catch(function(error) {
                  // Handle Errors here.
                    error = true;
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log('signIn error', error);
                  // ...
                });
            if(!error){
                $state.go("home");
            }


        }

        function register() {

            var error = false;
              if (!vm.Email || !vm.Password) {
                return console.log('email and password required');
              }
              // Register user
              firebase.auth().createUserWithEmailAndPassword(vm.Email, vm.Password)
                .catch(function(error) {
                  console.log('register error', error);
                  if (error.code === 'auth/email-already-in-use') {
                    var credential = firebase.auth.EmailAuthProvider.credential(vm.Email, vm.Password);
                    signInWithGoogle()
                      .then(function() {
                        firebase.auth().currentUser.link(credential)
                          .then(function(user) {
                            console.log("Account linking success", user);
                              $state.go("home");
                          }, function(error) {
                            console.log("Account linking error", error);
                          });
                      });
                  }
                });

        }

        function signInWithGoogle(){

                  // Sign in with Google
                  var provider = new firebase.auth.GoogleAuthProvider();
                  provider.addScope('profile');
                  provider.addScope('email');
                  return firebase.auth().signInWithPopup(provider)
                    .catch(function(error) {
                      console.log('Google sign in error', error);
                    });

        }

        function signOut() {

              firebase.auth().signOut();

        }

//         (function() {
//                var app = document.querySelector('#app');
//                app.signIn = function() {
//                  var email = app.email;
//                  var password = app.password;
//                  if (!email || !password) {
//                    return console.log('email and password required');
//                  }
//                  // Sign in user
//                  firebase.auth().signInWithEmailAndPassword(email, password)
//                    .catch(function(error) {
//                      // Handle Errors here.
//                      var errorCode = error.code;
//                      var errorMessage = error.message;
//                      console.log('signIn error', error);
//                      // ...
//                    });
//                };
//                app.register = function() {
//                  var email = app.email;
//                  var password = app.password;
//                  if (!email || !password) {
//                    return console.log('email and password required');
//                  }
//                  // Register user
//                  firebase.auth().createUserWithEmailAndPassword(email, password)
//                    .catch(function(error) {
//                      console.log('register error', error);
//                      if (error.code === 'auth/email-already-in-use') {
//                        var credential = firebase.auth.EmailAuthProvider.credential(email, password);
//                        app.signInWithGoogle()
//                          .then(function() {
//                            firebase.auth().currentUser.link(credential)
//                              .then(function(user) {
//                                console.log("Account linking success", user);
//                              }, function(error) {
//                                console.log("Account linking error", error);
//                              });
//                          });
//                      }
//                    });
//                };
//                app.signInWithGoogle = function() {
//                  // Sign in with Google
//                  var provider = new firebase.auth.GoogleAuthProvider();
//                  provider.addScope('profile');
//                  provider.addScope('email');
//                  return firebase.auth().signInWithPopup(provider)
//                    .catch(function(error) {
//                      console.log('Google sign in error', error);
//                    });
//                };

//                app.signOut = function() {
//                  // Sign out
//                  firebase.auth().signOut();
//                };
                // Listen to auth state changes
                firebase.auth().onAuthStateChanged(function(user) {
                  vm.User = user;
                  console.log('user', user);
                });
//              })();

    }

})();
