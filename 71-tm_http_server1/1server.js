const net=require('net');
var httpserver=net.createServer(function(socket){
    socket.on('data',function(data)
{
    console.log(data);
});

socket.on('end',function(){
    console.log("Connection Closed From Client Side");
});

socket.on('error',function(){
    console.log("Some Problem At Client Side");
});
});

httpserver.listen(8080,'localhost');
console.log("TM Http Server Ready : Port 8080");