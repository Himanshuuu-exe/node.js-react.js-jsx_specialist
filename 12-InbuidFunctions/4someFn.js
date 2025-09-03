function isAnyBodyIndian(obj)
{
    console.log("is any body indian here");
    return obj.country==="india";
}

var x=[
    {"name" : "david" , "country" : "austrailia"},
    {"name" : "joss" , "country" : "england"},
    {"name" : "rohit" , "country" : "india"},
    {"name" : "kane" , "country" : "newZ"},
    {"name" : "dhanush" , "country" : "shriL"}
]

var y=x.some(isAnyBodyIndian);
if(y) console.log("yes indian present");
else console.log("indian not present");

