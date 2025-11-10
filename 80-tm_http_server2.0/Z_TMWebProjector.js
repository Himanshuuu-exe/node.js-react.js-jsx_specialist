const fs=require('fs');
const net=require('net');
const mimeTypes=require("mime-types");
const configuration=require("./Z_configuration");
const errors=require("./Z_error");
const requestParser=require("./Z_requestParser");

const mappings=configuration.getConfiguration();

function Response(socket)
{
    this.$$$socket=socket;
    this.write=function(data)
    {
        this.$$$socket.write(data);
    }
}

function serverResource(socket,resource)
{
console.log('resource to server :'+resource);
if(!fs.existsSync(resource))
{
errors.send404(socket,resource);
return;
}

//do not use the following code instead write the one that sends chunks of 1024

var data=fs.readFileSync(resource);
var header="HTTP/1.1 200 ok\n"
header=header+'content-type :'+ mimeTypes.lookup(resource)+  '\n';
header=header+'content-length: ' + data.length + '\n';
header=header+"\n";

var response=header+data;
socket.write(response);
}

var httpServer=net.createServer(function(socket)
{
socket.on('data',function(data)
{
    //console.log("inside data"+data);
    var request=requestParser.parseRequest(data,mappings);

    if(request.error!=0)
    {
        errors.processError(request.error,socket,request.resource);
        return;
    }

    if(request.isClientSideTechnologyResources)
    {
        serverResource(socket,request.resource)
    }

    else //44
    {       //something here changed by gemini check if
        console.log("**************************TMMMMMMM");
        console.log("server side resources"+request.resource+"will be proceesed");
        var service=require("./private/"+request.resource);
        service.processRequest(request,new Response(socket));
    }
});

socket.on('end',function(){
    console.log('connection closed by client');
});

socket.on('error',function(){
    console.log('some error at client side');
});

});

httpServer.listen(8080,'localhost');
console.log("TMWebprojector is up : port 8080");