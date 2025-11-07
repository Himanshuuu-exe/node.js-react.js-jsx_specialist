exports.parseRequest=function(data)
{
    var request={}
    var str=data.toString();
    var splits=str.split('\n');
    var firstLine=splits[0];
    var w=firstLine.split(" ");
    request.method=w[0];       

    if(w[1]=='/')
    {
        request.resource="index.html";
    }

    else
    {
        request.resource=w[1].substring(1);
        
    }

//right now we are not considering server side resources

request.isClientSideTechnologyResources=true;
return request;
}