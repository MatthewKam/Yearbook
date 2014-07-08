var yearbookApp = angular.module('yearbook_app', []);

yearbookApp.controller('YearbookCtrl', ['$scope', function($scope) {
    $scope.videoUrl = ["/assets/lounge1.mp4", "/assets/lounge3.mp4", "/assets/lounge6.mp4", "/assets/lounge7.mp4","/assets/lounge8.mp4"];
    $scope.randomIndex = Math.floor($scope.videoUrl.length*Math.random());
    $scope.randomVideo = $scope.videoUrl[$scope.randomIndex];
    $scope.changeVideo = function(){
    	$scope.randomIndex = Math.floor($scope.videoUrl.length*Math.random());
      $scope.randomVideo = $scope.videoUrl[$scope.randomIndex];
    };

    $scope.repeatVideo = function() {
    document.getElementById('bgvid').addEventListener('ended',playNext,false);
	    function playNext(e) {
	        if(!e) { e = window.event; }
						if ($scope.randomIndex == $scope.videoUrl.length - 1) {
							console.log("you have hit the end");
							$scope.randomIndex = 0;
							$scope.$apply(function() {
								$scope.randomVideo = $scope.videoUrl[$scope.randomIndex];
								document.getElementById('bgvid').play();
							});
						} else {
							console.log('Incrementing');
							$scope.randomIndex++;
							$scope.$apply(function() {
								$scope.randomVideo = $scope.videoUrl[$scope.randomIndex];
								document.getElementById('bgvid').play();
							});
						}
	    }
	}
	}]);