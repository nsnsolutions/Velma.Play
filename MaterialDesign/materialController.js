
myApp.controller('materialController', ['$scope', '$timeout', '$mdBottomSheet', '$mdDialog', function ($scope, $timeout, $mdBottomSheet, $mdDialog) {

    $scope.alert = '';

    $scope.showGridBottomSheet = function($event) {

        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'MaterialDesign/bottomTemplate.html',
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

myApp.controller('GridBottomSheetCtrl',  function($scope, $mdBottomSheet) {

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

