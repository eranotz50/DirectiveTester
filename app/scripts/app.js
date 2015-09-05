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

            .state('module2', {
                url: '/module2',
                templateUrl: '/views/module2.html'
            });

    });

})();

