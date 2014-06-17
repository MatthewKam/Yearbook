var yearbookApp = angular.module('yearbook_app', []);

yearbookApp.controller('YearbookCtrl', ['$scope', function($scope) {
    $scope.videoUrl = ["/assets/lounge1.mp4", "/assets/lounge2.mp4", "/assets/lounge3.mp4", "/assets/lounge4.mp4"];
    $scope.randomVideo = $scope.videoUrl[Math.floor($scope.videoUrl.length*Math.random())]; 
    $scope.changeVideo = function(){
      $scope.randomVideo = $scope.videoUrl[Math.floor($scope.videoUrl.length*Math.random())];
    }
}]);