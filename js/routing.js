//routing configurations
tourApp.config(RoutesConfig);
RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider){
    //setting default state to login
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    //login state
    .state('login',{
        url:'/login',
        templateUrl:'login.html',
        controller:'loginController as ctrl',
    })
    //navbar state
    .state('navbar',{
        url:'/home',
        templateUrl:'navbar.html',
        controller:'navbarController',
        resolve:{
            'check':['$state',function($state){
                if(localStorage.getItem('key')=='adminloggedIn'){
                    $state.go('navbar.dashboard')
                }
                else if(localStorage.getItem('key')=='userloggedIn'){
                    $state.go('navbar.herolist')
                }
                else if(localStorage.getItem('key')!='adminloggedIn' && localStorage.getItem('key')!='userloggedIn'){
                    alert('0. Kindly login first!');
                    $state.go('login');
                }  
            }],
            'herolist1': ['httpService',function(httpService){
                return httpService.getheroes(1);
            }],
            'herolist2': ['httpService',function(httpService){
                return httpService.getheroes(2);
            }],
            'herolist3': ['httpService',function(httpService){
                return httpService.getheroes(3);
            }]
        }
    })
    //dashboard state
    .state('navbar.dashboard',{
        url:'/dashboard',
        templateUrl:'dashboard.html',
        resolve:{
            'check':function($state){
                if(localStorage.getItem('key')!='adminloggedIn' && localStorage.getItem('key')!='userloggedIn'){
                    alert('1 Kindly login first!');
                    $state.go('login');
                }
                else if(localStorage.getItem('key')=='userloggedIn'){
                    alert('Opps! seems like you are not admin');
                    $state.go('navbar.herolist');
                }
            }
        }
    })
    //herodetails state
    .state('navbar.dashboard.herodetails',{
        url:'/herodetails/:id',
        templateUrl:'herodetails.html',
        controller:'herodetailsController',
        resolve:{
            'check':function($state){
                 if(localStorage.getItem('key')!='adminloggedIn' && localStorage.getItem('key')!='userloggedIn'){
                    alert('2. Kindly login first!');
                    $state.go('login');
                }
                else if(localStorage.getItem('key')=='userloggedIn'){
                    alert('Opps! seems like you are not admin');
                    $state.go('navbar.herolist');
                }
            }
        }
    })
    //heroList state
    .state('navbar.herolist',{
        url:'/herolist',
        templateUrl:'herolist.html',
        controller:'heroListController', 
        resolve:{
            'check':function($state){
                if(localStorage.getItem('key')!='adminloggedIn' && localStorage.getItem('key')!='userloggedIn'){
                    alert('3. Kindly login first!');
                    $state.go('login');
                }
            }
        }
    })
    //herodetails state
    .state('navbar.herolist.herodetails',{
        url:'/herodetails/:id',
        templateUrl:'herodetails.html',
        controller:'herodetailsController',
        resolve:{
            'check':function($state){
                 if(localStorage.getItem('key')!='adminloggedIn' && localStorage.getItem('key')!='userloggedIn'){
                    alert('2. Kindly login first!');
                    $state.go('login');
                }
            }
        }
    })
    //logout state
    .state('logout',{
        url:'/logout',
        templateUrl:'login.html',
        resolve:{
            'check':['$state',function($state){
                localStorage.clear();
                $state.go('login');
            }]  
        }
    })  
}