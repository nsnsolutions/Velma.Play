/**
 * Created by dhcarter on 1/26/2015.
 */


myApp.controller('mainController', ['$scope', '$timeout', '$mdBottomSheet', '$mdDialog',  function ($scope, $timeout, $mdBottomSheet, $mdDialog) {

    $scope.area1 = function () { calledFromArea1(); }
    $scope.area2 = function () { calledFromArea2(); }
    $scope.area3 = function () { calledFromArea3(); }

    $scope.area4 = function () {

        calledFromArea4();

    }

    $scope.alert = '';

    $scope.showGridBottomSheet = function($event) {

        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'Area-Material/bottomTemplate.html',
            controller: 'GridBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };

    $scope.showAlert = function(ev) {
        $mdDialog.show(
            $mdDialog.alert()
                .title('Velma Question')
                .content('The Question.')
                .ariaLabel('Password notification')
                .ok('Done')
                .targetEvent(ev)
        );
    };


}]);

myApp.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {

    $scope.items = [
        { name: 'Print Mail', icon: 'hangout' },
        { name: 'Email', icon: 'mail' },
        { name: 'Self Print', icon: 'message' },
        { name: 'Show Now', icon: 'copy' },
    ];
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
});

