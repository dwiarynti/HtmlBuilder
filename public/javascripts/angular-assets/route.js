var app = angular.module("RDash", [
    "ui.bootstrap",
    "ui.router",
    "oc.lazyLoad",
    "common.services", 
    "dndLists"]);

app.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state('home', {
                    url: '/home',
                    templateUrl: '/javascripts/angular-assets/partialviews/home.html'
            })
            .state('profile', {
                    url: '/home',
                    templateUrl: '/javascripts/angular-assets/partialviews/home.html'
            });
    }

]);