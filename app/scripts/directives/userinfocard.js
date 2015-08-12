'use strict';

// Isolated scope.
angular.module('directivesTesterApp')
  .directive('userInfoCard', function () {
    return {
        templateUrl : '../../views/userInfoCard.html',
        restrict: 'E',
        scope:{
          user: '=',
          initIsVisible : '@isVisible'
        },
        controller: function($scope){
            $scope.IsVisible = ($scope.initIsVisible == 'true');
            $scope.KnightMe = function(user){
                user.rank = 'knight'
            };

            $scope.ToggleViewState = function(){
                $scope.IsVisible = !$scope.IsVisible;
            };

            $scope.removeFriend = function(friend){
                var idx = $scope.user.friends.indexOf(friend);
                if(idx > -1)
                    $scope.user.friends.splice(idx,1);
            };
        }
      }
  });

angular.module('directivesTesterApp')
    .directive('removeFriend', function () {
       return {
            restrict: 'E',
            templateUrl:  '../../views/removefriend.html',
            scope: {
                notifyParent: '&method'
            },
            controller: function($scope){
                $scope.removing = false;
                $scope.toggleIsRemoving = function(){
                    $scope.removing = !$scope.removing;
                }

                $scope.remove = function(){
                    $scope.notifyParent();
                }
            }


       };

});


/*
 angular.module('directivesTesterApp')
 .directive('removeFriend', function () {
 return {
 restrict: 'A',
 controller: function($scope) {
 $scope.removing = false;

 $scope.showRemove = function(){
 $scope.removing = true;
 };

 $scope.cancelRemove = function(){
 $scope.removing = false;
 };

 $scope.remove = function(friend){

 };
 }
 }

 });
 */
/*var idx = $scope.user.friends.indexOf(friend);
 if(idx > -1)
 $scope.user.friends.splice(idx,1);*/
// onRemoveFriend(friend);

/*
angular.module('directivesTesterApp')
    .directive('removeFriend', function () {
          return {
              restrict: 'A',
              controller: function($scope) {
                  $scope.removing = false;

                  $scope.showRemove = function(){
                      $scope.removing = true;
                  };

                  $scope.cancelRemove = function(){
                      $scope.removing = false;
                  };

                  $scope.remove = function(friend){
                      var idx = $scope.user.friends.indexOf(friend);
                      if(idx > -1)
                          $scope.user.friends.splice(idx,1);
                     // onRemoveFriend(friend);
                  };
              }
          }

    });
 */

angular.module('directivesTesterApp')
    .directive('address', function () {
        return {
            templateUrl : '../../views/address.html',
            restrict: 'E',
            scope:true,
            controller: function($scope){
                $scope.IsVisible = true;

                $scope.ToggleViewState = function(){
                    $scope.IsVisible = !$scope.IsVisible;
                }
            }
        }
    });