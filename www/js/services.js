angular.module('services', [])

.service('$neraca', function($config, $firebaseArray) {

	var user = $config.user;
	var neraca = firebase.database().ref('neraca');


	
	this.getAllTransactions = function() {
		console.log('waha');
		return $firebaseArray(neraca.limitToLast(5));
	}


	// t as in transaction
	this.addBalance = function(t) {

		var uso,
			nominal,
			dateUso,
			category,
			note;


		// neraca.child(user).push()
	}
})