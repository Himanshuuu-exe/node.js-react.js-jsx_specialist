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
var eventEmitter=new events.EventEmitter();
var client=null;

function processSpaces(command)  //32 new             <*-----------
{
    command=command.trim();
    while(true)
    {
        var i=command.indexOf("  ");
        if(i==-1) break;
        command=command.replace("  "," ");
    }
    return command;
}

function isValidCommand(command)  //32 new            <*--------------
{
    if(command=="logout") return true;
    if(command=="getUsers") return true;
    if(command.startsWith("send "))   
    {
        var pcs=command.split(" ");
        if(pcs.length>=3) return true;
    }
    if(command.startsWith("broadcast "))
    {
        while(true)
        {
            var i=command.indexOf("  ");
            if(i==-1) break;
            command=command.replace("  "," ");
        }

        var pcs=command.split(" ");
        if(pcs.length>=2) return true;
    }
    return false;
}

function processAction(action)
{
    if(action=="login") processLoginAction();
    if(action=="logout") processLogoutAction();
    if(action=="acceptCommand") processAcceptActionCommand();
}

async function processLoginAction()
{
    let ioInterface=readline.createInterface({
        "input":process.stdin,
        "output":process.stdout
    });

    let username=await acceptInput("Username:",ioInterface);
    let password=await acceptInput("Password:",ioInterface);
    
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
    else 
    {
        model.user=response.result;
        eventEmitter.emit('loggedIn');
    }
}

//removed

async function processAcceptActionCommand()
{
     let ioInterface=readline.createInterface({
        "input":process.stdin,
        "output":process.stdout
    });

    while(true)
    {
    let command=await acceptInput(`${model.user.username} (${model.user.id})> `,ioInterface);
    command=processSpaces(command); //32 new             <*-----------

        if(isValidCommand(command)==false)
        {
            console.log("Invalid Command/Syntax");
            continue;
        }
    
        let request=new Request();
        if(command.startsWith("send")) 
        {
            var spc1=command.indexOf(" ");
            var spc2=command.indexOf(" ",spc1+1);
            var message=command.substring(spc2+1);
            var toUser=command.substring(spc1+1,spc2);
            request.action="send";                          //33   <---------------
            request.toUser=toUser;
            request.fromUser=model.user.username;
            request.message=message;
            client.write(JSON.stringify(request));
        } //rest assinmemt

        if(command.startsWith("broadcast "))
        {
            request.action="broadcast";
            request.fromUser=model.user.username;
            request.message=command.substring(10);
            client.write(JSON.stringify(request));
        }

        if(command=="getUsers" || command=="logout")
        {
            request.action=command; //this will change later on
            request.userID=model.user.id;
            client.write(JSON.stringify(request));
        }
        if(command=="logout") break;
    
   }
   ioInterface.close();
   processAction('login');
}

function processAcceptCommandActionResponse(response)
{
    if(response.action=="getUsers")
    {
        eventEmitter.emit('usersListArrived',response.result);
    }
    if(response.action=="logout")
    {
        eventEmitter.emit("logged Out");
    }
}

//events 
function loggedIn()
{
    console.log(`welcome ${model.user.username}`);
    processAction('acceptCommand');
}

//setting up events 

eventEmitter.on('loggedIn',loggedIn);
//eventEmitter.on('usersListArrived',usersListArrived);

client=new net.Socket();
client.connect(2189,"localhost",function(){
    console.log("connected to chat server");
    processAction('login');
});

client.on('data',function(data){
    var response=JSON.parse(data);

    if(response.action=="login") processLoginActionResponse(response);

    //else if(response.action=="logout") processLogoutActionResponse(response);

    //else if(response.action=="getUsers") processAcceptCommandActionResponse(response);
});

client.on('end',function(){
    console.log("Server Ended The Connection");
});

client.on('error',function(){
    console.log("some problem occured at server side");
});