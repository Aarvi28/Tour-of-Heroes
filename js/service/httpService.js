tourApp.service('httpService',httpService)
.constant('getApiUrl','https://reqres.in/api/users?page=')
.constant('postApiUrl','https://reqres.in/api/users');

function httpService($http,getApiUrl,postApiUrl){
    var service=this;
    service.getheroes=function(i){
        return $http.get(getApiUrl+i);
    }
    service.postjob=function(name, job){
        return $http.post(postApiUrl,{params:{
            name:name,
            job: job
        }
    });
}
}