'use strict';

(function() {

    var routerApp = angular.module('directivesTesterApp', ['ui.router']);

    routerApp.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/main');

        $stateProvider

            .state('main', {
                url: '/main',
                templateUrl: '/views/main.html'
            })

            .state('directivesFnd', {
                url: '/directivesFnd',
                templateUrl: '/views/directivesFnd.html',
                controller: 'directivesCourseCtrl'
            })

            .state('directivesFnd.module1', {
                url: '/directivesFnd.module1',
                templateUrl: '/views/directivesFnd/module1.html',
                controller: 'dirFndModule1Ctrl'
            });


    });

})();

