// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  //Force all tabs to the bottom
    //$ionicConfigProvider.tabs.position('bottom'); // other values: top

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

 

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
 
 //sets all tabs to the bottom 
  $ionicConfigProvider.tabs.position('bottom');

 //Controls the tabs routing 
  $stateProvider
  // Setup abstract state for the tabs 
  .state('tabs',{
    url:'/tab',
    abstract:true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history
  .state('tabs.home',{
    url: '/home',
    views: {
      'home-tab':{
        templateUrl: 'templates/home.html'
      }
   }

  })

   .state('tabs.courses',{
    url: '/courses',
    views: {
      'courses-tab':{
        templateUrl: 'templates/courses-list.html',
        controlller: 'ListController'
      }
   }

  })

    .state('tabs.course',{
    url: '/courses/:cId',
    views: {
      'courses-tab':{
        templateUrl: 'templates/course.html',
        controlller: 'ListController'
      }
    }

  })

  // about tab
  .state('tabs.about',{
    url: '/about',
    views: {
      'about-tab':{
        templateUrl: 'templates/about.html'
      }
   }

  })

// cs-course tab
  .state('tabs.cs-course',{
    url: '/cs-course',
    views: {
      'courses-tab':{
        templateUrl: 'templates/cs-course.html',
        controller: 'CsListController'
      }
   }

  })

// cs-intro tab
  .state('tabs.cs-intro',{
    url: '/cs-intro',
    views: {
      'courses-tab':{
        templateUrl: 'templates/cs-intro.html',
      }
   }

  })
  // cs-course curriculum tab
  .state('tabs.cs-curriculum',{
    url: '/cs-curriculum',
    views: {
      'courses-tab':{
        templateUrl: 'templates/cs-curriculum.html',
        controller: 'CsListController'
      }
   }

  })

  // cs-course videos tab
  .state('tabs.cs-videos',{
    url: '/cs-videos',
    views: {
      'courses-tab':{
        templateUrl: 'templates/cs-videos.html',
        controller: 'CsListController'
      }
   }

  })

   // math course tab
  .state('tabs.math-course',{
    url: '/math-course',
    views: {
      'courses-tab':{
        templateUrl: 'templates/math-course.html',
        
      }
   }

  })

   // math videos tab
  .state('tabs.math-videos',{
    url: '/math-videos',
    views: {
      'courses-tab':{
        templateUrl: 'templates/math-videos.html',
      }
   }

  })

   // pdesign course tab
  .state('tabs.pdesign-course',{
    url: '/pdesign-course',
    views: {
      'courses-tab':{
        templateUrl: 'templates/pdesign-course.html',
       
      }
   }

  })
   // pdesign videos tab
  .state('tabs.pdesign-videos',{
    url: '/pdesign-videos',
    views: {
      'courses-tab':{
        templateUrl: 'templates/pdesign-videos.html',
       
      }
   }

  })

   // Algorithms course tab
  .state('tabs.algo-course',{
    url: '/algo-course',
    views: {
      'courses-tab':{
        templateUrl: 'templates/algo-course.html',
       
      }
   }

  })

    // Algorithms videos tab
  .state('tabs.algo-videos',{
    url: '/algo-videos',
    views: {
      'courses-tab':{
        templateUrl: 'templates/algo-videos.html',
       
      }
   }

  })

  // programming -paradigms course tab
  .state('tabs.pparadigms-course',{
    url: '/pparadigm-course',
    views: {
      'courses-tab':{
        templateUrl: 'templates/pparadigm-course.html',
       
      }
   }

  })

  // programming -paradigms videos tab
  .state('tabs.pparadigms-videos',{
    url: '/pparadigm-videos',
    views: {
      'courses-tab':{
        templateUrl: 'templates/pparadigm-videos.html',
       
      }
   }

  })

  $urlRouterProvider.otherwise('/tab/home');
})


//loading info for courses curriculum
.controller('ListController', ['$scope', '$http', '$state',
        function($scope, $http, $state){
          $http.get('/js/courses.json').success(function(data) {  
             $scope.courses = data;
             $scope.whichcourse=$state.params.cId;

          });

  }])

//loading info for courses curriculum
.controller('CsListController', ['$scope', '$http',
        function($scope, $http){
          $http.get('/js/cs-courses.json').success(function(data) {  
             $scope.courses = data;
             
          });

  }]);
