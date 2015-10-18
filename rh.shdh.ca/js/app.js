var rhApp = angular.module('rhapp', []);

rhApp.controller('MainPageController', function($scope, $http){
   console.log("TEST");
   $scope.text = '';
   $scope.data = [
   ];
   $scope.getNumber = function(){
      return new Array($scope.text.length);
   };
   $scope.search = function(){
      console.log($scope.text);
      var request = $http({
         method: "get",
         url: "api/search.php",
         params: {
           action: "get",
           term: $scope.text
         }
      }).then(function successCallback(response){
         console.log(response.data);
         var data = response.data;
         $scope.data = data.data;
      })
   };
});
