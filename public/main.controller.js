'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController'
			// RESOLVE!
	});
});

app.controller('MainController', function($scope, Post) {
	console.log(Post);
	Post.findAll().then(function(posts) {
		$scope.allPosts = posts;
		
	})
	// .then(function(element){
	// 	element[0].go();
	// }
	// );
 	/*
		TODOS:
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state
		and retrieve the data there)

 	*/
})
