'use strict';


(function() {

    angular.module('directivesTesterApp')
        .controller('directivesCourseCtrl', function ($scope) {

            $scope.title = "Directives Course";

            $scope.links = [{ title: "module 1" , state: "module1"},
                { title: "module 2" , state: "module2"}
            ];

        });
})();

