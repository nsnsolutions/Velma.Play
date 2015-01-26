/**
 * Created by dhcarter on 1/26/2015.
 */

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.htm'
        })

        .state('area1', {
            url: '/area1',
            templateUrl: 'Area1/area1.htm'
        })

        .state('area2', {
            url: '/area2',
            templateUrl: 'Area2/area2.htm'
        })

        .state('area3', {
            url: '/area3',
            templateUrl: 'Area3/area3.htm'
        })


});



