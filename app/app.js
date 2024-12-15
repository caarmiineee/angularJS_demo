// Definizione del modulo AngularJS
var app = angular.module('myApp', []);

// Definizione di un controller
app.controller('MainController', function($scope) {
    $scope.message = "Ciao, AngularJS!";
});
