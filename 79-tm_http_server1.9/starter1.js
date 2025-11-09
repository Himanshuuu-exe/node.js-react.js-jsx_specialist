var thisModule=this;

exports.processError=function(error,socket,resource)
{
    if(error==404) thisModule.send404(socket,resource);
}

exports.send404=function(socket) //might be somewhere problem in resour or resor
{
    var body="<!DOCTYPE HTML>";
    body=body+"<HTML Lang='en'>";
    body=body+"<head>";
    body=body+"<title> Cool Stuff </title>";
    body=body+"<meta charset='utf-8'>";
    body=body+"</head>";
    body=body+"<body>";
    body=body+"<h1> All Is Well </h>";
    body=body+"<p> Ujjain Is The City Of Gods </p>"; //resou thing check
    body=body+"</body>";
    body=body+"</html>";
    var header = "HTTP/1.1 200 OK\n";
    header=header+new Date().toGMTString()+"\n";
    header=header+"server : TMWebProjector \n";
    header=header+"Content-Type: text/html\n";
    header=header+"Content-Length"+body.length+"\n";
    header=header+"connection:close\n";
    header=header+"\n";
    socket.write(header+body);
}