module.controller("controller", function($scope) {
	$scope.Info =[{
		name :"Phill",
	    position:"developer"
	}]
     $scope.name = $scope.Info[0].name;
	 $scope.position = $scope.Info[0].position;
 }); 