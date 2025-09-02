function resolveState(element, index, arr)
{
    var mp=["ujjain" , "indore" , "Dewas" , "mhow"]
    var maharashtra=["punr" , "mumbai" , "satara"]

    if(mp.indexOf(element)!=-1)
    {
        var obj={
            "city" : element  , "state" : "madhya pradesh"
        };
        return obj;
    }

     if(maharashtra.indexOf(element)!=-1)
    {
        var obj={
            "city" : element  ,
            "state" : "maharashtra"
        };
        return obj;
    }

    var obj={
        "city" : element  ,
        "state" : "unknown"
        };
        return obj;
}

var cities=["ujjain" , "goa" , "Dewas" , "mumbai", "indore", "lonavala"]
var result=cities.map(resolveState);
console.log(result);

