//client side code

const net=require('net');
var clientSocket=new net.Socket();

clientSocket.connect(5500,"localhost",function(){
    console.log('connected to server');
    clientSocket.write('hi,i am your new client');
});

clientSocket.on('data',function(data){
    console.log('server says:'+data);
});

clientSocket.on('end',function(){
    console.log('connection t server closed');
});