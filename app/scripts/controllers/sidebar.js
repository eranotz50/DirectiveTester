'use strict';


(function() {

    angular.module('directivesTesterApp')
        .controller('SideBarCtrl', function ($scope) {

           /* $scope.links = [{ title: "module 1" , state: "main"},
                { title: "Directives Fundamentals" , state: "directivesFnd"}
            ];
*/

            $scope.links = [
                {
                    title : "Directives Fundamentals",
                    state: "directivesFnd",
                    subLinks: [{
                        title : "Module 1",
                        state : "module1"
                    },
                    {
                        title : "Module 2",
                        state : "module2"
                    }]
                },
                {
                    title : "Authorization",
                    state: "authorization",
                    subLinks: [{
                        title : "Module 1",
                        state : "module1"
                    },
                        {
                            title : "Module 2",
                            state : "module2"
                        }]
                }
            ]; // end links

        });
})();
