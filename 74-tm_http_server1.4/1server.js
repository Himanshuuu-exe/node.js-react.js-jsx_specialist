//hame chiye request agar abcd.html ke liye aaae to chale
//or default "/" ke liye index.html chale esa kuch. So let's Start!

const net=require('net');
const fs=require('fs');

function sendResponse(socket,file)
{
    try
    {
        var data=fs.readFileSync(file,"utf-8");
        var response=data;
        var responseLength=response.length;
        var a="HTTP/1.1 200 ok \n"; 
        a=a+"content-type: text/html\n";//mime 
        a=a+`content-length: ${responseLength}\n`;
        a=a+"\n";
        a=a+response;
        socket.write(a);
    }
    catch(e)
    {
        console.log(e);
    }
}

var httpServer=net.createServer(function(socket)
{
    socket.on('data',function(data)
    {
    var request=data.toString();
    var splits=request.split('\n');                       //let request = "GET / HTTP/1.1\nHost: localhost:8080\nUser-Agent: Chrome\n\n";                
    console.log(splits.length);  //18                        //let splits = request.split('\n');    op niche
    var firstLine=splits[0];                               //'GET / HTTP/1.1',     (\n ke bharose tod dega)
    console.log(firstLine);   //GET / HTTP/1.1                            //'Host: localhost:8080',                                
    var words=firstLine.split(" ");                    //'User-Agent: Chrome',        
    console.log(words.length);    //3                     
    var requestPath=words[1]; //0 par 'Get' or 1 par '/' rehta hai
    console.log('path: '+requestPath);  //path: /
    if(requestPath=="/") sendResponse(socket,"index.html");
    /*
    if(requestPath=="/abcd.html") sendResponse(socket,"abcd.html");
    if(requestPath=="/china.png") sendResponse(socket,"china.png");
    if(requestPath=="/error404.html") sendResponse(socket,"error404.html");
    if(requestPath=="/img.jpg") sendResponse(socket,"img.jpg");*/
    else sendResponse(socket,requestPath.substring(1));
    }); //onData ends

socket.on('end',function(){
    console.log("Connection Closed From Client Side");
});//onEnd ends

socket.on('error',function(){
    console.log("Some Problem At Client Side");
});//onError ends
});

httpServer.listen(8080,"localhost");
console.log("Connected to the server on port 8080");

/*
var splits = request.split('\n');
👉 Request ko line by line tod diya.
splits[0] → "GET / HTTP/1.1"
splits[1] → "Host: localhost:8080"
splits[2] → "User-Agent: Chrome"

console.log(splits.length);
👉 Total kitni lines bani hain request me, wo print karega.

var firstLine = splits[0];
console.log(firstLine);
👉 Request ki pehli line nikal li.
Example: "GET / HTTP/1.1"
Isme hamesha method, path, aur HTTP version hota hai.

var words = firstLine.split(" ");
console.log(words.length);
👉 First line ko space ke basis pe tod diya.
"GET / HTTP/1.1" → ["GET", "/", "HTTP/1.1"]
words[0] → "GET" (method)
words[1] → "/" (path)
words[2] → "HTTP/1.1" (protocol version)

var requestPath = words[1];
console.log('path: '+requestPath);
👉 Request ka path (URL) nikal liya.
Example: Agar browser http://localhost:8080/about.html hit kare, to requestPath = "/about.html" milega.

if(requestPath=="/") sendResponse(socket,"index.html");
else sendResponse(socket,requestPath.substring(1));
👉 Logic:

Agar path / hai → to index.html serve karo (default homepage).

Agar kuch aur hai → us path se file serve karo.

Example: Path /about.html mila, to requestPath.substring(1) = "about.html", fir sendResponse(socket,"about.html") chalega.
*/