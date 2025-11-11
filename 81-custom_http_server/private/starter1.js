var thisModule=this;

exports.processError=function(error,socket,resource)
{
    if(error==404) thisModule.send404(socket,resource);
}

exports.processRequest=function(request,response) //might be somewhere problem in resour or resor
{

    var name=request.data["nm"];
    var city=request.data["ct"];
    var gender=request.data["gender"];

    console.log("Name :" + name);
    console.log("City :" + city);
    console.log("Gender :" + gender);

    response.setContentType("text/html");

    response.write("<!DOCTYPE HTML>");
    response.write("<HTML Lang='en'>");
    response.write("<head>");
    response.write("<title> Cool Stuff </title>");
    response.write("<meta charset='utf-8'>");
    response.write("</head>");
    response.write("<body>");
    response.write("<h1> All Is Well <br> </h1>");
    response.write("Hello" + name + "<br>");
    response.write("<p>" + city + "is city of gods </p>"); //resou thing check
    response.write("</body>");
    response.write("</html>");
    /*
    var header = "HTTP/1.1 200 OK\n";
    header=header+new Date().toGMTString()+"\n";
    header=header+"server : TMWebProjector \n";
    header=header+"Content-Type: text/html\n";
    header=header+"Content-Length"+body.length+"\n";
    header=header+"connection:close\n";
    header=header+"\n";
    */

    //response.write(header+body);
   
    //socket.write(header+body);
}

