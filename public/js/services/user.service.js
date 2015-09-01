'use  strict';

app.factory('User', function(DS) {
	var User = DS.defineResource({
		idAttribute: '_id',
		name: 'users',
		relations: {
			hasMany: {
				posts: {
					localField: 'posts',
					foreignKey: 'userId'
				}
			}
		}
	})
	return User;
  /*
    create a User jsdata resource
  */

}).run(function(User) {})
