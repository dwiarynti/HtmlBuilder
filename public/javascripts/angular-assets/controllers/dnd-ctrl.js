app.controller('dndcontroller', function ($scope, $filter, $rootScope,$state) {
    $scope.panel = [
        {"value":"a", "color":"red"},
        {"value":"b", "color":"blue"},
        {"value":"c", "color":"green"},
        {"value":"d", "color":"yellow"},
    ];

    $scope.dropper = function(event, dragData){
        console.log("event ="+ event);
        console.log("dragData ="+ dragData);
    }
});
