var rhApp = angular.module('rhapp', []);

rhApp.controller('MainPageController', function($scope, $http){
   console.log("TEST");
   var searched = false;
   $scope.text = '';
   $scope.data = [
   ];
   $scope.getNumber = function(){
      return new Array($scope.text.length);
   };
   $scope.noResults = function(){
      if($scope.data.length == 0 && searched == true)
         return true;
      else
         return false;
   };
   $scope.search = function(){
      searched = true;
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

rhApp.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
});
