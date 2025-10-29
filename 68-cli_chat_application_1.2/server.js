//server 
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

getUserByUsername(username)
{
var user=this.users.find(function(user){
return user.username==username;
});
return user;
}

getLoggedInUsers()
{
let loggedInUsers=[];
for(var e=0; e<this.users.length; e++)
{
if(this.users[e].loggedIn)
{
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

var user=JSON.parse(usersJSONString).users;

user.forEach(function(user){
user.loggedIn=false;
user.id=null;
model.users.push(user);
});
}

function processRequest(requestObject)
{
if(requestObject.action=='login')
{
var username=requestObject.username;
var password=requestObject.password;
var users=model.getUserByUsername(username);
var success;

if(users)
{
if(users.password==password)
success=true;
}

var response=new Response();
response.action=requestObject.action;
response.success=success;

if(success)
{
response.error="";
model.userId++;
requestObject.socket.userId=model.userId;

users.id=model.userId;
users.loggedIn=true;

response.result={
"username":users.username,
"userId":users.id
};
}

else{
response.error="Invalid Username/Password";
response.result="";
}
requestObject.socket.write(JSON.stringify(response));

}//login end

if(requestObject.action=='getUsers')
{
var response=new Response();
response.result=model.getLoggedInUsers();
response.action=requestObject.action;

requestObject.socket.write(JSON.stringify(response));
}
}

populateDataStructure();
var server=net.createServer(function(socket){
//console.log("New Client Connected To Server");//<--

socket.on('data',function(data){

var requestObject=JSON.parse(data);
requestObject.socket=socket;

try{
processRequest(requestObject);
}catch(e)
{
console.log(e);
}

});

socket.on('end',function(){
console.log("Client Ended The Connection With Chat Server");
});

socket.on('error',function(){
console.log("some error at client side");  //<--
});
});

server.listen(2189,"localhost");
console.log("Chat Server Is Ready On port 2189");





