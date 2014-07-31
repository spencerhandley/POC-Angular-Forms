'use strict';

/**
 * @ngdoc function
 * @name pocAngularFormsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocAngularFormsApp
 */
angular.module('pocAngularFormsApp')
  .controller('MainCtrl', function ($scope, $http) {

		$scope.eventTypes = [
		    { name: "Comedy Event", data: '/scripts/formdata/comedy.json' },
		    { name: "Childrens Event", data: '/scripts/formdata/childrens.json' },
		    { name: "Educational Event", data: '/scripts/formdata/educational.json' },
		    { name: "Music Event", data: '/scripts/formdata/music.json' }
	  ];

	  $scope.selectedEventType = $scope.eventTypes[0];

	  $scope.$watch('selectedEventType',function(val){
	    if (val) {
	      $http.get(val.data).then(function(res){
	      	console.log(res)
	        $scope.schema = res.data.schema;
	        $scope.form   = res.data.form;
	        $scope.modelData = res.data.model || {};
	      });
	    }
	  });
	  $scope.decorator = 'bootstrap-decorator';

});
