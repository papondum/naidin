angular.module('start',[])

 .config(function($stateProvider, $urlRouterProvider) {
 	  .state('main', {
      url: '/main',
      templateUrl: 'index.html',
      controller: 'mainCtrl'
  });

  $urlRouterProvider.otherwise('/main');

});