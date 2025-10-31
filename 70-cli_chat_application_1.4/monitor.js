const net=require('net');
const events=require('events');

class DataModel
{
    constructor(){
    this.id=null;
    this.username=null;
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

//events 

function loggedOut()
{
    console.log(`User ${model.username} Logged Out From Here...`);
    process.exit(0);
}

function usersListArrived(users)
{
    console.log("List Of Online Users");
    for(var e=0; e<users.length; e++)
        {
            console.log(users[e]);
        }    
}

function monitorCreated(username)
{
    model.username=username;
    console.log("This Is The Monitor For User :->"+username);
}

function monitorDenied()
{
    console.log("Unable to create monitor :-( for userId"+model.id);
    process.exit(0);
}

function broadcastArrived(fromUser,message)
{
    console.log('Broadcast from ' + fromUser + " > " + message);
}

function messageArrived(fromUser,message)                           //33 last <*--------------
{
    console.log(fromUser + " > " + message);
}

function notificationArrived(notification)
{
    console.log('Notification --> ' + notification);
}

//setting up events 

eventEmitter.on('loggedOut',loggedOut);
eventEmitter.on('usersListArrived',usersListArrived);
eventEmitter.on('monitorCreated',monitorCreated);
eventEmitter.on('monitorDenied',monitorDenied);
eventEmitter.on('broadcastArrived',broadcastArrived);
eventEmitter.on('messageArrived',messageArrived);                  //33 last <*--------------
eventEmitter.on('notificationArrived',notificationArrived);

model.id=process.argv[2];
client=new net.Socket();
client.connect(2189,"localhost",function(){
    console.log("connected to chat server");
    let request=new Request();
    request.action="createMonitor";
    request.userID=model.id;
    client.write(JSON.stringify(request));    
});

client.on('data',function(data){
    var response=JSON.parse(data);
    
    if(response.action=="createMonitor")
    {
        if(response.result != null && response.result.length>0)
        {
            eventEmitter.emit('monitorCreated',response.result);
        }
        else
        {
            eventEmitter.emit('monitorDenied')
        }
    }
    
    if(response.action=="broadcast") eventEmitter.emit('broadcastArrived',response.fromUser,response.message);
    if(response.action=="logout") eventEmitter.emit('loggedOut');
    if(response.action=="getUsers") eventEmitter.emit('usersListArrived',response.result);
    if(response.action=="notification") eventEmitter.emit('notificationArrived',response.notificationMessage);
    if(response.action=="send") eventEmitter.emit('messageArrived',response.fromUser,response.message);       //33 last <*--------------

});

client.on('end',function(){
    console.log("Server Ended The Connection");
});

client.on('error',function(){
    console.log("some problem occured at server side");
});