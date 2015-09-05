'use strict';


angular.module('directivesTesterApp').directive('spacebarSupport', function() {
    return {
        restrict: 'A',
        link: function(scope, el, attrs) {
            console.log('spacebarSupport');
            $('body').on('keypress', function(evt) {
                var vidEl = el[0];
                if(evt.keyCode === 32) {
                    if(vidEl.paused) {
                        vidEl.play();
                    } else {
                        vidEl.pause();
                    }
                }
            })
        }
    }
});

/*
    1) Isolated scope with an handler that can be assigned from outside the directive named eventPause on the outside as well
    2) the pause event is not part of angular and angular is not aware of it, in order to propagate it back to angular we need to call $applay
       * read about digest in angular.
    3) We want our directives to be as none intrusive as possible. Creating as isolated scope effects other scopes of directives placed no the same element.
 */

angular.module('directivesTesterApp').directive('eventPause', function($parse) {
    return {
        restrict: 'A',
        /*scope: {
          eventPause: '&'
        },*/
        link: function(scope, el, attrs) {
            var fn = $parse(attrs['eventPause']);
            console.log('eventPause');
            el.on('pause',function(event){
              scope.$apply(function(){
                  //scope.eventPause(); you could of called scope.onPaused because this is now an inherited scope. but that will be coupled to that scope in order to work.
                  // instead we parse the value of the attribute called eventPause placed on our element. and get the handler it refers to.
                  fn(scope,{evt: event});
              })
            })
        }
    }
});



angular.module('directivesTesterApp').directive('myClick', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, el, attrs) {
            var fn = $parse(attrs['myClick']);
            console.log('myClick');

            el.on('click',function(){
                scope.$apply(function(){
                    fn(scope);
                })
            })
        }
    }
});


/*
          1) instead of coupling the selection logic into our directive element we can create an decorator directive
            that would handle selection logic.

 */


angular.module('directivesTesterApp').directive('userTile', function() {
    return {
        restrict: 'E',
        scope: {
            user: '='
        },
        //  ng-click="select()"
        template: '<div class="well" user-click ng-class="{highlight:user.selected}">'+
               '<h1>{{user.name}}</h1> </div>'
       /* ,controller: function($scope){
            $scope.select = function(){
                $scope.user.selected = !$scope.user.selected;
            }
        }*/
    }
});

angular.module('directivesTesterApp').directive('userClick', function() {
        return {
            restrict: 'A',
            link: function(scope, el, attrs) {
                console.log('userClick');

                el.on('click',function(){
                   scope.user.selected = !scope.user.selected;
                    scope.$apply();
                })
            }
        }
 });

/* Setting up a watch ("Binding") element */

angular.module('directivesTesterApp').directive('fontScale', function() {
    return {
        restrict: 'A',
        link: function(scope, el, attrs) {
            console.log('fontScale');
            scope.$watch(attrs['fontScale'], function (newVal,oldVal){
                el.css('font-size',newVal + '%');
            })


        }
    }
});

