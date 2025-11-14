const fs=require('fs');
const net=require('net');
const mimeTypes=require("mime-types");
const configuration=require("./Z_configuration");
const errors=require("./Z_error");
const requestParser=require("./Z_requestParser");

const mappings=configuration.getConfiguration();

function Response(socket)
{
    this.responseInitiated=false;
    this.contentType="text/html";
    this.$$$socket=socket;
    this.setContentType=function(str)
    {
        this.contentType=function(str)
        {
            this.contentType=str;
        }

        //change made in mesg board
        this.close=function()
        {
            if(this._isClosed) return;
            socket.end();
            this._isClosed=true;
        }
        

        this.write=function(data)
        {
            if(this.responseInitiated==false)
            {
                this.$$$socket.write("HTTP/1.1 200 OK\n");
                this.$$$socket.write(new Date().toGMTString()+"\n");
                this.$$$socket.write("server : TMWebProjector \n");
                this.$$$socket.write("Content-Type:"+this.contentType+"\n");
                //this.$$$socket.write("Content-Length"+body.length+"\n");
                this.$$$socket.write("connection:close\n");
                this.$$$socket.write("\n");
                this.responseInitiated=true;
            }
            this.$$$socket.write(data);
        }
    };
}

function serverResource(socket,resource)
{
console.log('resource to server :'+resource);
if(!fs.existsSync(resource))
{
errors.send404(socket,resource);
return;
}

//do not use the following code instead write the one that sends chunks of 1024 i mean use buffer bro

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


//above i implemented without buffer, means large data could cause error
//----------------------------------------------------------------------------------------------
//below can handle the large amount data too using buffer or by converting into chunks

/*
var httpServer = net.createServer(function(socket) {
    let requestData = Buffer.alloc(0);                    // Create a container for data chunks

    socket.on('data', function(chunk) {
        // 2. Add each arriving chunk to the container
        requestData = Buffer.concat([requestData, chunk]);
    });

    socket.on('end', function() {                       //This runs only AFTER all chunks have arrived
        console.log('Connection finished. Processing complete data now.');

        if (requestData.length > 0) {
            // 4. NOW, parse the complete request
            var request = requestParser.parseRequest(requestData, mappings);

            if (request.error != 0) {
                errors.processError(request.error, socket, request.resource);
                return;
            }

            if (request.isClientSideTechnologyResources) {
                serverResource(socket, request.resource);
            } else {
                console.log("**************************TMMMMMMM");
                console.log("Server side resource " + request.resource + " will be processed");
                try {
                    var service = require("./" + request.resource); 
                    var response = new Response(socket);
                    service.processRequest(request, response);
                } catch (e) {
                    console.log("Error loading or processing module:", e);
                                                //can create a send500 function in Z_error.js for this
                    errors.send404(socket, "Error processing request."); 
                }
            }
        }
    });

    socket.on('error', function(err) {
        console.log('Some error on the client side:', err.message);
    });
});

*/