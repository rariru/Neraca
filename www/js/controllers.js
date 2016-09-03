angular.module('controllers', [])

.controller('sidebarCtrl', function($config, $scope) {

	$scope.user = $config.user;
})

.controller('homeCtrl', function($neraca, $scope) {
	// console.log('alaa');
	$scope.neracas = $neraca.getAllTransactions();
})