const net=require('net');
const readline=require('readline');
const events=require('events');

function acceptInput(q,ioInterface)
{
var promise=new Promise(function(resolve,reject){
ioInterface.question(q,function(answer){
resolve(answer);
});
});
return promise;
}

class DataModel
{
constructor(){
this.user=null;
}
}

class Request
{
constructor()
{
this.action="";
}
}

var model=new DataModel();
var eventsEmitter=new events.EventEmitter();
var client=null;

function processAction(action)
{
if(action=='login') processLoginAction();
if(action=='logout') processLogoutAction();
if(action=='acceptCommand') processAcceptCommandAction();
}

async function processLoginAction()
{
var ioInterface=readline.createInterface({
"input":process.stdin,
"output":process.stdout
});

var username=await acceptInput("Enter Username :",ioInterface);
var password=await acceptInput("Enter Password :",ioInterface);

ioInterface.close();

var request=new Request();
request.username=username;
request.password=password;
request.action="login";

client.write(JSON.stringify(request));
}

function processLoginActionResponse(response)
{
if(response.success==false)
{
console.log(response.error);
processAction('login');
}

else{
model.user=response.result;
eventsEmitter.emit('loggedIn');
}
}

async function processAcceptCommandAction()
{
var ioInterface=readline.createInterface({
"input":process.stdin,
"output":process.stdout
});

var command=await acceptInput(`${model.user.username} (${model.user.userId}) -> `,ioInterface);

var request=new Request();
request.action=command;

client.write(JSON.stringify(request));
}

function processAcceptCommandActionResponse(response)
{
if(response.action=='getUsers') eventsEmitter.emit('getLoggedInUsers',response.result);
}

//<<--------uper dekh le 

//event 
function loggedIn()
{
console.log(`Welcome ${model.user.username}`);
processAction('acceptCommand');
}

function getLoggedInUsers(users)
{
console.log("List Of Online Users");
for(var e=0; e<users.length; e++)
{
console.log(users[e]);
}
processAction('acceptCommand');
}

eventsEmitter.on('loggedIn',loggedIn);
eventsEmitter.on('getLoggedInUsers', getLoggedInUsers);

client=new net.Socket();
client.connect(2189,"localhost",function(){
console.log("Connected To Server On Port 2189");
processAction('login');
});

client.on('data',function(data){
var response=JSON.parse(data);
if(response.action=='login') processLoginActionResponse(response);
else if(response.action=='getUsers') processAcceptCommandActionResponse(response);
});

client.on('end',function(){
console.log('Server Ended The Connection');
});

client.on('error',function(){
console.log('some error at server side');
});
