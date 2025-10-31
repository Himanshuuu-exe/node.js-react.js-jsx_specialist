const net=require('net');
const fs=require('fs');

class Response
{
    constructor()
    {
    this.action="";
    this.success=false;
    this.result=null;
    this.error=null;
    }
}

class DataModel
{
    constructor()
    {
        this.users=[];
        this.userId=0;
    }

    getUserByUserName(username)
    {
        let user=this.users.find(function(user)
    {
        return user.username==username;
    });
    return user;
    }

    getUserByUserID(id)  //<- 2nd                                                    2nd************* 
    {
        let user=this.users.find(function(user)
    {
        return user.id==id;
    });
    return user;
    }

    getLoggedInUsers()
    {
        let loggedInUsers=[];
        for(var e=0; e<this.users.length; e++)
        {
            if(this.users[e].loggedIn){
                loggedInUsers.push(this.users[e].username);
            }
        }
        return loggedInUsers;
    }
}

let model=new DataModel();

function populateDataStructure()
{
    var usersJSONString=fs.readFileSync("users.data","utf-8");
    var users=JSON.parse(usersJSONString).users;

    users.forEach(function(user){
        user.loggedIn=false;
        user.id=0;
        users.monitorSocket=null;  //1st                                              1st************
        model.users.push(user);
    });
}

function processRequest(requestObject)
{

    if(requestObject.action=="send")              //32 new **<--------------
    {
        let message=requestObject.message;
        let fromUser=requestObject.fromUser;
        let toUser=requestObject.toUser;
        let user=model.getUserByUserName(fromUser);

            if(user && user.loggedIn && user.monitorSocket)
            {
                var response=new Response();
                response.action=requestObject.action;
                response.message=message;
                response.fromUser=fromUser;
                user.monitorSocket.write(JSON.stringify(response));
            }
            user=model.getUserByUserName(toUser);
            if(user && user.loggedIn && user.monitorSocket)
            {
            var response=new Response();
            response.action=requestObject.action;
            response.message=message;
            response.fromUser=fromUser;
            user.monitorSocket.write(JSON.stringify(response));
            }
    } //send end

    if(requestObject.action=="broadcast")              //32 new **<--------------
    {
        let message=requestObject.message;
        let fromUser=requestObject.fromUser;
        model.users.forEach(function(user){
            if(user.loggedIn && user.monitorSocket)
            {
                var response=new Response();
                response.action=requestObject.action;
                response.message=message;
                response.fromUser=fromUser;
                user.monitorSocket.write(JSON.stringify(response));
            }
        });
    } //broadcast end

    if(requestObject.action=="createMonitor") //<-3rd
    {
    let userID=requestObject.userID;
    let user=model.getUserByUserID(userID);
    var response=new Response();
    response.action=requestObject.action;
    if(user)
    {
        user.monitorSocket=requestObject.socket;
        response.result=user.username;
    }
    else
    {
        response.result="";
    }
    requestObject.socket.write(JSON.stringify(response));
    } //monitor end

if(requestObject.action=='login')
{
let username=requestObject.username;
let password=requestObject.password;
let user=model.getUserByUserName(username);
var success=false;

if(user)
{
    if(password==user.password)
        success=true;
}

let response=new Response();
response.action=requestObject.action;
response.success=success;

if(success)
{
    response.error="";
    model.userId++;
    requestObject.socket.userId=model.userId;

    user.id=model.userId; //yaha samjho thoda yrr
    user.loggedIn=true;
    response.result={
        "username":user.username,
        "id":user.id
    };
}
else{
    response.error="Invalid Username/Password";
    response.result="";
}
requestObject.socket.write(JSON.stringify(response));

if(success)
{
    let username=user.username;
    let notificationMessage=username+" has logged in";
    var e=0;
    while(e<model.users.length)  //there is user not users in copy
    {
        user=model.users[e];               //might be problem here
        console.log(username+","+user.username);
        if(user.username!=username && user.loggedIn && user.monitorSocket)
        {
            console.log("sending notification");
            response=new Response;
            response.action="notification";
            response.notificationMessage=notificationMessage;
            user.monitorSocket.write(JSON.stringify(response));
        }
        e++;
    }
}

}//login part end here

if(requestObject.action=='logout')
{
let userID=requestObject.userID;
let user=model.getUserByUserID(userID);
if(user && user.monitorSocket)
{
    var response=new Response();
    response.action=requestObject.action;
    user.monitorSocket.write(JSON.stringify(response));
}
user.loggedIn=false;
user.id=null;
user.monitorSocket=null;

let username=user.username;
let notificationMessage=username+" has logged out";
var e=0;
while(e<model.users.length)  //there is user not users in copy
{
user=model.users[e];               //might be problem here
console.log(username+","+user.username);
if(user.username!=username && user.loggedIn && user.monitorSocket)
{
console.log("sending notification");
response=new Response;
response.action="notification";
response.notificationMessage=notificationMessage;
user.monitorSocket.write(JSON.stringify(response));
}
e++;
}
} //logout end

if(requestObject.action=="getUsers")
{
    let userID=requestObject.userID;
    let user=model.getUserByUserID(userID);
    if(user && user.monitorSocket)
    {
    var response=new Response();
    response.action=requestObject.action;
    response.result=model.getLoggedInUsers();
    user.monitorSocket.write(JSON.stringify(response));
    }
}//getUsers end


}

populateDataStructure();
var server=net.createServer(function(socket)
{ 
    socket.on('data',function(data){
        var requestObject=JSON.parse(data);
        requestObject.socket=socket;      
        try{
            processRequest(requestObject);
        }catch(e){
            console.log(e);
        }
    });


    socket.on('end',function(){
        console.log("client ended the connection");
    });

    socket.on('error',function(){
        console.log("Some error occured at client side");
    });
});
server.listen(2189,"localhost");
console.log("chat server is ready to accept connection on port 2189");