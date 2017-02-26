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

        vm.RegPage;
        vm.regEmail;
        vm.regPassword;
        vm.regPassword2;


        function signIn(){
        // alert("in sign in" + vm.Email + " " + vm.Password);
              if (!vm.Email || !vm.Password) {
                alert("Email and Password are Required");
                return console.log('email and password required');
              }
              // Sign in user
              firebase.auth().signInWithEmailAndPassword(vm.Email, vm.Password).then(function() {
                 // Email sent.
                 $state.go("home");
               }, function(error) {
                  var errorCode = error.code;
                       var errorMessage = error.message;
                       console.log('signIn error', error);
                       alert("Email or Password are wrong");
               });

        }

        function register() {

              if (!vm.regEmail || !vm.regPassword || !vm.regPassword2) {
                return console.log('email and password required');
              }
              if(!(vm.regPassword == vm.regPassword2)){
                return console.log("This shit doesn't match")
              }
              // Register user
              firebase.auth().createUserWithEmailAndPassword(vm.regEmail, vm.regPassword).then(function() {
                    alert("Damn Straight you are registered!");
//                $state.go("home");
              }, function(error) {
                 console.log('register error', error);
                   if (error.code === 'auth/email-already-in-use') {
                     var credential = firebase.auth.EmailAuthProvider.credential(vm.regEmail, vm.regPassword);
                     signInWithGoogle()
                       .then(function() {
                         firebase.auth().currentUser.link(credential)
                           .then(function(user) {
                             console.log("Account linking success", user);
                                // Don't go home straight from registration
//                               $state.go("home");
                           }, function(error) {
                             console.log("Account linking error", error);
                           });
                       });
                   }
              });
        }

        // app.signInWithGoogle = function() {
        //   // Sign in with Google
        //   var provider = new firebase.auth.GoogleAuthProvider();
        //   provider.addScope('profile');
        //   provider.addScope('email');
        //   return firebase.auth().signInWithPopup(provider)
        //     .catch(function(error) {
        //       console.log('Google sign in error', error);
        //     });
        // };

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


    // Listen to auth state changes
        firebase.auth().onAuthStateChanged(function(user) {
          vm.User = user;
          console.log('user', user);
        });

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

//              })();

    }

})();
