//navbar Controller
tourApp.controller('navbarController',['$rootScope','$scope','herolist1','herolist2','herolist3',function($rootScope,$scope,herolist1,herolist2,herolist3){
    //entire response data in a global array
    $rootScope.heroes=[];
    $rootScope.array=[];
    $rootScope.heroes.push(herolist1.data.data);
    $rootScope.heroes.push(herolist2.data.data);
    $rootScope.heroes.push(herolist3.data.data);
    //extracting data from the response
    var k=0;
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            $rootScope.array[k]=$rootScope.heroes[i][j];
            k++;
        }
    }
    //check for role
    $scope.checkuser=function(){
        if(localStorage.getItem('key')=='adminloggedIn')
            return true;
        else
            return false;
    }
}]);