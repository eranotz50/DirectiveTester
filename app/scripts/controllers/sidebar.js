'use strict';


(function() {

    angular.module('directivesTesterApp')
        .controller('SideBarCtrl', function ($scope) {

            $scope.links = [{ title: "module 1" , state: "main"},
                { title: "module 2" , state: "module2"}
            ];

        });
})();
