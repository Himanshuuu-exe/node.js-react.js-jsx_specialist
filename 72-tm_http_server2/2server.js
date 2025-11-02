const net=require('net');
const fs=require('fs');
var httpserver=net.createServer(function(socket){
    socket.on('data',function(data)
{
    console.log(data.toString());
    var response="welcome to tm http server version 1.0";
    var responseLength=response.length;
    var a="HTTP/1.1 200 ok\n"; //MIME Code
    a=a+"content - type : text/html\n";
    a=a+`content-length : ${responseLength}\n`;
    a=a+"\n";
    a=a+response;
    socket.write(a);
});//onData ends

socket.on('end',function(){
    console.log("Connection Closed From Client Side");
});//onEnd ends

socket.on('error',function(){
    console.log("Some Problem At Client Side");
});//onError ends
});

httpserver.listen(8080,'localhost');
console.log("TM Http Server Ready : Port 8080");