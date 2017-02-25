(function(){
    'use strict';

    angular.module("myApp" )
        .controller("loginCtrl",loginCtrl);

    loginCtrl.$inject = ['$scope'];

    function loginCtrl($scope){
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
        alert("in sign in");
//             var email = app.email;
//             var password = app.password;
              if (!vm.Email || !vm.Password) {
                return console.log('email and password required');
              }
              // Sign in user
              firebase.auth().signInWithEmailAndPassword(vm.Email, vm.Password)
                .catch(function(error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log('signIn error', error);
                  // ...
                });

        }

        function register() {

//              var email = app.email;
//              var password = app.password;
              if (!vm.Email || !vm.Password) {
                return console.log('email and password required');
              }
              // Register user
              firebase.auth().createUserWithEmailAndPassword(vm.Email, vm.Password)
                .catch(function(error) {
                  console.log('register error', error);
                  if (error.code === 'auth/email-already-in-use') {
                    var credential = firebase.auth.EmailAuthProvider.credential(vm.Email, vm.Password);
                    app.signInWithGoogle()
                      .then(function() {
                        firebase.auth().currentUser.link(credential)
                          .then(function(user) {
                            console.log("Account linking success", user);
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
