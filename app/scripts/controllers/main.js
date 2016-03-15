'use strict';

/**
 * @ngdoc function
 * @name angularOnGithubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularOnGithubApp
 */
angular.module('angularOnGithubApp')
  .controller('MainCtrl', function ($scope) {
    $scope.items = [
      'item 1',
      'item 2',
      'item 3'
    ];
  });
