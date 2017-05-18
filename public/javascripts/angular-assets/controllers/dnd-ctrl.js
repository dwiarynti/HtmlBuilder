app.controller('dndcontroller', function ($scope, $filter, $rootScope,$state) {

$scope.staffList = {
    selected:null,
    staff: [
      {"SFKEY": 'RDN', 
           "GIVEN": "Robert",
           "SURNAME": "De Niro"}, 
            {"SFKEY": 'BW', 
           "GIVEN": "Bruce",
           "SURNAME": "Willis"},
            {"SFKEY": 'JS', 
           "GIVEN": "Jason",
           "SURNAME": "Stratham"},
            {"SFKEY": 'MG', 
           "GIVEN": "Mel",
           "SURNAME": "Gibson"}]
        };

 $scope.selected = {"element":{},"object":{}};

$scope.dragstart = function(event, item){
    $scope.selected.element = event.target.outerHTML;
    $scope.selected.object = item;
        console.log($scope.selected);
    

}
    $scope.onDrop = function(item, index, obj){
        // console.log(event.target);
        if(obj.element.length == 0 && $scope.selected.object._id == item._id){
            // obj.data.push(item);
            obj.element.push($scope.selected.element);
        }
        
        return true;
    }

    $scope.dragOver = function(obj){
        obj.dragover = true;
        console.log($scope.holderbox);
        return true;
    }

    $scope.panel = [
        {"_id": 1, "value":"a", "color":"red"},
        {"_id": 2, "value":"b", "color":"blue"},
        {"_id": 3, "value":"c", "color":"green"},
        {"_id": 4, "value":"d", "color":"yellow"},
    ];
// $scope.orderedItems = [];
// $scope.element = '<div style="width:200px; height:200px; border:1px solid blue;">test</div>';
$scope.holderbox = [
    {"id":1, "element":[], "dragover":false, "data":[], "name":"col1"},
    {"id":2, "element":[], "dragover":false, "data":[], "name":"col2"},
    {"id":3, "element":[], "dragover":false, "data":[], "name":"col3"},
    {"id":4, "element":[], "dragover":false, "data":[], "name":"col4"},
    {"id":5, "element":[], "dragover":false, "data":[], "name":"col5"},
    {"id":6, "element":[], "dragover":false, "data":[], "name":"col6"},
    {"id":7, "element":[], "dragover":false, "data":[], "name":"col7"},
    {"id":8, "element":[], "dragover":false, "data":[], "name":"col8"},
    {"id":9, "element":[], "dragover":false, "data":[], "name":"col9"},
    {"id":10, "element":[], "dragover":false, "data":[], "name":"col10"},
    {"id":11, "element":[], "dragover":false, "data":[], "name":"col11"},
    {"id":12, "element":[], "dragover":false, "data":[], "name":"col12"}
    ];



//       // Drop handler. 
//   $scope.onDrop = function (event) {
//      console.log(event);

//   };

//   	$scope.gridsterOpts = {
// 		margins: [20, 20],
// 		outerMargin: false,
// 		pushing: true,
// 		floating: true,
// 		draggable: {
// 			enabled: true
// 		},
// 		resizable: {
// 			enabled: false,
// 			handles: ['n', 'e', 's', 'w', 'se', 'sw']
// 		}
// 	};

//     	$scope.customItemMap = {
// 		sizeX: 'item.size.x',
// 		sizeY: 'item.size.y',
// 		row: 'item.position[0]',
// 		col: 'item.position[1]'
// 	};

//     $scope.customItems = [
//     {
// 		size: {x: 2, y: 1},
// 		position: [0, 0]
//     }, 
//     {
// 		size: {x: 2,y: 2},
// 		position: [0, 2]
// 	}, 
//     {
// 		size: {x: 1,y: 1},
// 		position: [1, 4]
// 	}, 
//     {
// 		size: {x: 1,y: 2},
// 		position: [1, 5]
// 	}, 
//     {
// 		size: {x: 1,y: 1},
// 		position: [2, 0]
// 	}, 
//     {
// 		size: {x: 2,y: 1},
// 		position: [2, 1]
// 	}, {
// 		size: {x: 1,y: 1},
// 		position: [2, 3]
// 	}];


});


app.controller('DragDropCtrl', function($scope) {
  $scope.handleDrop = function(item, bin) {
    // alert('Item ' + item + ' has been dropped into ' + bin);
  }
});