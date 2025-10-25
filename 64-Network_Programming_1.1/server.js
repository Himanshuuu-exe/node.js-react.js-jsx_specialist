//server code
const net=require('net');

var server=net.createServer(function(socket){
    socket.on('data',function(data){
        console.log('client says:'+data);
    });

    socket.on('end',function(){
        console.log('client closed connection');
    });

    socket.write('hii client');
    socket.end();
});

server.listen(5500);
console.log('server is ready & is eager to accept connections on port 5500');