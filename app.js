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

        .state('BigFeature2', {
            url: '/BigFeature2',
            templateUrl: 'BigFeature2/BigFeature2.html'
        })


});



