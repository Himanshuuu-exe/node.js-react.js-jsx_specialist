//var errors=require("/Z_error");

exports.parseRequest=function(data,mappings)
{
    var request={}
    var str=data.toString();            
    var splits=str.split('\n');
    var firstLine=splits[0];
    var w=firstLine.split(" ");
    request.error=0;
    request.method=w[0];

   
    if(w[1]=='/')
    {
        request.resource="index.html";
        request.isClientSideTechnologyResources=true;
        return request;
    }

    if(w[1]=="/private" || w[1]=="/private/")   ///i did
    {
        request.error=404;
        request.resource=w[1].substring(1)
        request.isClientSideTechnologyResources=true;
        return request;
    }

    else
    {
        var e=0;
        while(e<mappings.paths.length)
        {
            if(mappings.paths[e].path==w[1])
            {
                request.resource=mappings.paths[e].resource;
                request.isClientSideTechnologyResources=false;
                return request;
            }
            e++;
        }
        request.resource=w[1].substring(1);
        request.isClientSideTechnologyResources=true;
        return request;
    }
}

