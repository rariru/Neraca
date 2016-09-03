// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase', 'routes', 'controllers', 'services'])

.constant('$config', {
  firebase: {
    apiKey: "AIzaSyAF5nZKcq68Q0Wbct2cNNYzrQorrw-gGvA",
    authDomain: "neraca-7a960.firebaseapp.com",
    databaseURL: "https://neraca-7a960.firebaseio.com",
    storageBucket: "neraca-7a960.appspot.com"
  },
  user: 'baka'
})

.run(function($ionicPlatform, $config) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    initFirebase();
  });


  function initFirebase() {
    firebase.initializeApp($config.firebase);
  }
})
