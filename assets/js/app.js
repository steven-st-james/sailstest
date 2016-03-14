angular.module('myapp',[])
  .controller('ItemsController', ['$scope','$http',function($scope,$http){
    $scope.getItems = function() {
      $http.get('/items')
        .then(function(data){
          $scope.items = data.data;
          console.log($scope.items);
        });
    };
  }]);
