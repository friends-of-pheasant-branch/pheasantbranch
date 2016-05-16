var app = angular.module('app', []);

app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

app.controller('bindCtrl', ['$scope', function($scope) {
  $scope.name = 'Leonard';
}]);
