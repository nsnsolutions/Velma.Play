/**
 * Created by dhcarter on 1/26/2015.
 */


myApp.controller('mainController', ['$scope', '$timeout',  function ($scope, $timeout) {

    $scope.Buttons = function () { calledFromButtons(); }
    $scope.Feature2 = function () { Feature2(); }

}]);

