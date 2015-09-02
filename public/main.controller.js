'use strict';
//global app

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			users: function(User) {
	 			return User.findAll().then(function(users) {
					console.log(users);
					return users;
				});
			},
			posts: function(Post) {
				return Post.findAll().then(function(posts) {
					return posts;
				});
			}
		}
	});
});

app.controller('MainController', function($scope, Post, User, users, posts) {
	console.log(posts);
	$scope.allPosts = posts;
	// Post.findAll().then(function(posts) {
	// 	$scope.allPosts = posts;
	//
	// })
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
