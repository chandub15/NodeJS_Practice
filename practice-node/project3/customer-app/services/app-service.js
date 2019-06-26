
var service={};
var username='';

service.setUsername=function(newUsername){
    console.log("in service");
    username=newUsername;
}

service.getUsername=function(){
    return username;
}

module.exports = service;