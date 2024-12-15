var app = angular.module('myApp', []);

app.controller('MainController', function($scope) {
    $scope.user1 = {
        name: "Mario Rossi",
        age: 30,
        email: "mario.rossi@example.com",
        photo: "https://via.placeholder.com/100"
    };

    $scope.user2 = {
        name: "Luisa Verdi",
        age: 25,
        email: "luisa.verdi@example.com",
        photo: "https://via.placeholder.com/100"
    };

    console.log("Dati definiti nel controller:", $scope.user1, $scope.user2);
});
