var app = angular.module('sounder');

app.controller('MainController', function($scope, soundService) {

	$scope.getUser = function() {
		soundService.getUser($scope.searchText).then(function(response){
			console.log(response.data);
			$scope.userData = response.data;
		})
	}




});