'use strict';


angular.module('directivesTesterApp')
  .controller('module2Ctrl', function ($scope) {
    $scope.messages = [];
    $scope.onPause = function(event){
        console.log('paused + event :' + event);
        $scope.messages.push({text: 'paused!'});
    };
    // Shows how we can pass parameters to our decorator directive
    $scope.data = {message: "I have not been clicked"};
    $scope.onClick = function(p){
        p.message = "I have been clicked";
    }

    $scope.user1 = {
        name: 'Luke',
        selected: true
    }


});

