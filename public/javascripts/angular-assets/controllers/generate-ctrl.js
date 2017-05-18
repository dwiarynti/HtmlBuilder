app.controller('generatecontroller', function($scope,generateResource,subjectResource,$compile) {
 var generateresource = new generateResource();
 var subjectresource = new subjectResource();
 $scope.init = [];
 $scope.initSubject = [];
 $scope.getsubject = function()
 {
     
 }
 generateresource.$init({},function(data)
 {
    $scope.init = data.obj;
        
 })

$scope.SaveClick = function()
{
    $scope.myText = angular.element(editor).html();
   generateresource.element = $scope.myText;
   generateresource.$create({},function(data)
   {
       console.log(data);
   })
}
 
 //console.log($scope.myHTML);
});
app.directive('dynamic', function ($compile) {
 
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
});

