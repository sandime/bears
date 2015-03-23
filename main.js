/**
 * Created by SHERRI on 3/23/15.
 */
var app = angular.module('myApp', []);
app.controller('DemoController', function($scope) {
    $scope.counter = 0;
    $scope.add = function(amount) { $scope.counter += amount; };
    $scope.subtract = function(amount) { $scope.counter -= amount; };
});