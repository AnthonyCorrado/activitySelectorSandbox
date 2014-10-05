activitiesApp = angular.module('activitiesApp', []);

activitiesApp.factory('activitiesModel', function() {
	var activities = [
		[
			{'name': 'Country', 'category': 'Music'},
			{'name': 'R&B', 'category': 'Music'},
			{'name': 'Hip Hop', 'category': 'Music'},
			{'name': 'Pop', 'category': 'Music'},
			{'name': 'Rock', 'category': 'Music'},
			{'name': 'Classic Rock', 'category': 'Music'},
			{'name': 'Alternative', 'category': 'Music'}
		],
		[
			{'name': 'LA Angels', 'category': 'Sports'},
			{'name': 'LA Dodgers', 'category': 'Sports'},
			{'name': 'SD Chargers', 'category': 'Sports'},
			{'name': 'Anaheim Ducks', 'category': 'Sports'},
			{'name': 'LA Kings', 'category': 'Sports'},
			{'name': 'LA Clippers', 'category': 'Sports'},
			{'name': 'LA Lakers', 'category': 'Sports'}
		],
		[
			{'name': 'Hiking', 'category': 'Outdoors'},
			{'name': 'Biking', 'category': 'Outdoors'},
			{'name': 'Walking', 'category': 'Outdoors'},
			{'name': 'Running', 'category': 'Outdoors'},
			{'name': 'Kayaking', 'category': 'Outdoors'},
		],
		[
			{'name': 'Yoga', 'category': 'Workout'},
			{'name': 'Spin', 'category': 'Workout'},
			{'name': 'Pilates', 'category': 'Workout'},
			{'name': 'Martial Arts', 'category': 'Workout'},
			{'name': 'Gym', 'category': 'Workout'},
		],
		[
			{'name': 'Wine', 'category': 'Nightlife'},
			{'name': 'Bar Night', 'category': 'Nightlife'},
			{'name': 'Dancing', 'category': 'Nightlife'},
			{'name': 'Movies', 'category': 'Nightlife'},
			{'name': 'Art & Museum', 'category': 'Nightlife'}
		],
		[
			{'name': 'Italian', 'category': 'Food'},
			{'name': 'Mexican', 'category': 'Food'},
			{'name': 'Japanese', 'category': 'Food'},
			{'name': 'Indian', 'category': 'Food'},
			{'name': 'Mediterranean', 'category': 'Food'},
			{'name': 'Persian', 'category': 'Food'}
		]
	];
	return activities;
});

activitiesApp.controller('ActivitiesCtrl', ['$scope', 'activitiesModel', function ($scope, activitiesModel) {

		$scope.allActivities = activitiesModel;
		$scope.categories = ['All', 'Music', 'Sports', 'Outdoors', 'Workout', 'Nightlife', 'Food'];

		$scope.catPick = function(index) {
			if(index === 0) {
				$scope.query = "";
			}
			else {
				$scope.query = $scope.categories[index];
			}
		};

		$scope.selectedIndex = -1;

		$scope.itemClicked = function($index) {
			$scope.selectedIndex = $index;
		};
}]);

