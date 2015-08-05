'use strict';


angular.module('directivesTesterApp')
  .directive('userInfoCard', function () {
    return {
        templateUrl : '../../views/userInfoCard.html',
        restrict: 'E',
        scope:true,
        controller: function($scope){
            $scope.KnightMe = function(user){
                user.rank = 'knight'
            };
            console.log($scope);
        }
      }
  });
