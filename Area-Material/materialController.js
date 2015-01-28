
//myApp.controller('materialController', ['$scope', '$timeout', '$mdBottomSheet', function ($scope, $timeout, $mdBottomSheet) {
//
//    alert('1');
//    $scope.alert = '';
//
//    $scope.showGridBottomSheet = function($event) {
//
//        alert('a');
//        $scope.alert = '';
//        $mdBottomSheet.show({
//            templateUrl: 'bottomTemplate.html',
//            controller: 'GridBottomSheetCtrl',
//            targetEvent: $event
//        }).then(function(clickedItem) {
//            $scope.alert = clickedItem.name + ' clicked!';
//        });
//    };
//
//
//}]);
//
//myApp.controller('GridBottomSheetCtrl', ['$scope', '$mdBottomSheet',  function($scope, $mdBottomSheet) {
//
//    $scope.items = [
//        { name: 'Hangout', icon: 'hangout' },
//        { name: 'Mail', icon: 'mail' },
//        { name: 'Message', icon: 'message' },
//        { name: 'Copy', icon: 'copy' },
//        { name: 'Facebook', icon: 'facebook' },
//        { name: 'Twitter', icon: 'twitter' },
//    ];
//    $scope.listItemClick = function($index) {
//        var clickedItem = $scope.items[$index];
//        $mdBottomSheet.hide(clickedItem);
//    };
//}]);

