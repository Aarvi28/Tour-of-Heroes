//Hero Details Controller
tourApp.controller('herodetailsController',['$scope','$rootScope','$state','$stateParams','httpService',function($scope,$rootScope,$state,$stateParams,httpService){
    var id=$stateParams.id;
    $scope.id=id;
    $scope.name=$rootScope.array[id].first_name+" "+$rootScope.array[id].last_name;

    //Updating hero name and posting job
    $scope.updateValue=function(){
        $scope.message='';
    //Check for empty fields
    if($scope.name!=undefined && $scope.job!=null ){    
        $rootScope.array[id].first_name=$scope.name;
        $rootScope.array[id].last_name='';

        //Calling Service
        var promise=httpService.postjob($scope.name,$scope.job);
        promise.then(function(response){
            alert('job posted!');
            if(localStorage.getItem('key')=='adminloggedIn')
                $state.go('navbar.dashboard');
            else if(localStorage.getItem('key')=='userloggedIn')
                $state.go('navbar.herolist');
        },function(error){
            console.log('Error is: ',error);
            console.log('Job not posted');
        })
    }
    //Displaying error message on screen
    else{
        $scope.message='We need to know what to post :P';            

    }
    //Flag set to false for viewDetails div
        $rootScope.flag=false;        
    };

    //Returning to previous state
    $scope.back=function(){
            if($state.current.name=='navbar.dashboard.herodetails')
                $state.go('navbar.dashboard');
            else if($state.current.name=='navbar.herolist.herodetails')
                $state.go('navbar.herolist');
    };
}]);