'use strict';


(function() {

    angular.module('directivesTesterApp')
        .controller('MainCtrl', function ($scope) {

           $scope.user1 =   CreateUser('Luke Skywalker'
               ,{poBox: 'PO Box 123', city: 'Secret Rebel Base',street: 'Yavin 4'}
               ,["Saab", "Volvo", "BMW"] );

            $scope.user2 =   CreateUser('Luke Skywalker'
                ,{poBox: 'PO Box 123', city: 'Secret Rebel Base',street: 'Yavin 4'}
                ,["Saab", "Volvo", "BMW"] );

           /* $scope.users = [
                  CreateUser('Luke Skywalker'
                     ,{poBox: 'PO Box 123', city: 'Secret Rebel Base',street: 'Yavin 4'}
                     ,["Saab", "Volvo", "BMW"] )
                , CreateUser('Han Solo'
                    ,{poBox: 'PO Box 123', city: 'Secret Rebel Base',street: 'Yavin 4'}
                    ,["Saab", "Volvo", "BMW" ])];*/

         });
})();


function CreateUser(name,address ,freinds)
{
    return{
        name: name,
        address: address,
        friends: freinds
    };
}

/*{
 name: 'Luke Skywalker',
 address: {
 poBox: 'PO Box 123',
 city: 'Secret Rebel Base',
 street: 'Yavin 4'
 },
 friends:["Saab", "Volvo", "BMW"]
 };*/