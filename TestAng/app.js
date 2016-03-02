angular.module('start',[])

 .config(function($stateProvider, $urlRouterProvider) {
 	  .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl'
  });

  $urlRouterProvider.otherwise('/main');

});