/**
 * Created by dhcarter on 1/26/2015.
 */


myApp.controller('mainController', ['$scope', '$timeout',  function ($scope, $timeout) {

    $scope.area1 = function () { calledFromArea1(); }
    $scope.area2 = function () { calledFromArea2(); }
    $scope.area3 = function () { calledFromArea3(); }
    $scope.area4 = function () { calledFromArea4(); }
    $scope.sprint301 = function () { calledForSprint301(); }


    $scope.alert = '';

}]);

