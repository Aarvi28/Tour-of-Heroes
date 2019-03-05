//Hero List Controller
tourApp.controller('heroListController',['$scope','$rootScope',function($scope,$rootScope){
    //Flag for View Detail
    $rootScope.flag=false;
    // Showing View Details
    $scope.showhero=function(id){
        $scope.identity=id;
        $scope.heroname=$rootScope.array[id].first_name+" "+$rootScope.array[id].last_name;
        $rootScope.flag=true;
    }
    //Checking the logged in user's role
    $scope.rolecheck=function(){
        if(localStorage.getItem('key')=='adminloggedIn'){
            return true;
        }
        else
            return false;
    }
}]);