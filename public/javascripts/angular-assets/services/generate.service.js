(function () {
    "use strict";
    angular
        .module("common.services")
        .factory("generateResource",
                ["$resource",
                 generateResource]);
    function generateResource($resource) {
        return $resource("/api/html/:action/:_id",
               { _id: '@_id' },
               {          
                 init: {method:'GET' , params:{action:'init'}},
                 create: {method:'POST' , params:{action:'create'}},
               })
    }
}());