/**
 * Created by dhcarter on 1/26/2015.
 */

var myApp = angular.module('myApp', ['ui.router', 'ngMaterial']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.htm'
        })

        .state('Buttons', {
            url: '/Buttons',
            templateUrl: 'Buttons/Buttons.htm'
        })

        .state('MaterialDesign', {
            url: '/MaterialDesign',
            templateUrl: 'MaterialDesign/material.htm'
        })

        .state('DaveFeature', {
            url: '/DaveFeature',
            templateUrl: 'DaveFeature/DaveFeature.html'
        })

        .state('GregFeature1', {
            url: '/GregFeature1',
            templateUrl: 'GregFeature1/GregFeature1.html'
        })

        .state('GregFeature2', {
            url: '/GregFeature2',
            templateUrl: 'GregFeature2/GregFeature2.html'
        })

        .state('GregFeature3', {
            url: '/GregFeature3',
            templateUrl: 'GregFeature3/GregFeature3.html'
        })

        .state('BigFeature2', {
            url: '/BigFeature2',
            templateUrl: 'BigFeature2/BigFeature2.html'
        })
        .state('monti1', {
            url: '/monti1.html',
            templateUrl: 'Monti1/monti1.html'
        })


});



