var thisModule=this;

exports.processError=function(error,socket,resource)
{
    if(error==404) thisModule.send404(socket,resource);
}

exports.send404=function(socket,resource) //might be somewhere problem in resour or resor
{
    var body="<!DOCTYPE HTML>";
    body=body+"<HTML Lang='en'>";
    body=body+"<head>";
    body=body+"<title> 404 NOT Found </title>";
    body=body+"<meta charset='utf-8'>";
    body=body+"</head>";
    body=body+"<body>";
    body=body+"<h1> Resource Not Found </h1>";
    body=body+"<p> The Request URL /"+resource+"was not found on this server </p>"; //resou thing check
    body=body+"</body>";
    body=body+"</html>";
    var header = "HTTP/1.1 404 Not Found\n";
    header=header+new Date().toGMTString()+"\n";
    header=header+"server : TMWebProjector \n";
    header=header+"Content-Type: text/html\n";
    header=header+"Content-Length: "+body.length+"\n";
    header=header+"connection:close\n";
    header=header+"\n";
    socket.write(header+body);
}
