//Login Controller
tourApp.controller('loginController',['$scope','$rootScope','$state',function($rootScope,$scope,$state){
    var ctrl=this;
    //Sign up button controls
    $scope.onSubmit=function(){
        var email=ctrl.email;
        var password=ctrl.password;
        //Set key for admin in local Storage
        if(email=='admin@jungleworks.com' && password=='123456')
        {
            localStorage.setItem('key', 'adminloggedIn');
            $state.go('navbar.dashboard');
            alert('Admin Login Success');
        }
        //Set key for user in local Storage
        else if(email=='user@jungleworks.com' && password=='123456'){
            localStorage.setItem('key', 'userloggedIn');
            $state.go('navbar.herolist');
            alert('User Login Success');
        }
        //check for unknown credentials
        else{
            alert('Opps! You are doing something wrong');
            $state.go('login');
        }
    }
}]);