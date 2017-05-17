var app = angular.module("RDash", [
    "ui.bootstrap",
    "ui.router",
    "oc.lazyLoad",
    "common.services", 
    "ngDragDrop"]);

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
            })
            .state('dnd', {
                    url: '/dnd',
                    templateUrl: '/javascripts/angular-assets/partialviews/dnd.html'
            });
    }

]);