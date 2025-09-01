function printReport(x,y)
{
    console.log("some report related data" ,x,y);
}

function addHeader(func , sh)
{
    console.log("add header got called", sh);

    function proxy(p,q)
    {
        console.log(sh);
        func(p,q);
    }
    return proxy;
}

kkk=addHeader(printReport,"ujjain pop report");
jjj=addHeader(printReport,"indore pop report");
kkk(1000,2000);
jjj(3000,4000);