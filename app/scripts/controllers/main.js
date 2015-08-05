'use strict';


(function() {

    angular.module('directivesTesterApp')
        .controller('MainCtrl', function ($scope) {
            console.log('main controller');

            $scope.user =
            {
                name: 'Luke Skywalker',
                address: {
                      poBox: 'PO Box 123',
                      city: 'Secret Rebel Base',
                      street: 'Yavin 4'
                   },
                friends:["Saab", "Volvo", "BMW"]
            };

            console.log($scope);
        });
})();
