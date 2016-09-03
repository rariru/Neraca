angular.module('routes', [])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	.state('sidebar', {
		url: '/sidebar',
		controller: 'sidebarCtrl',
		abstract: true,
		templateUrl: 'templates/sidebar.html'
	})

	.state('sidebar.home', {
		url: '/home',
		views: {
			'content' : {
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			}
		}
	});

	$urlRouterProvider.otherwise('/sidebar/home');
})