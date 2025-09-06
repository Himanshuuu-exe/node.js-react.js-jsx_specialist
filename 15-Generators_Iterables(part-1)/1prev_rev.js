var v=new Map();
v.set(101,"ramesh");
v.set(102, "suresh");
v.set(103, "lokesh");

for(var e of v)
{
    console.log(e);
}

var k=v.values();
var  element=k.next();

while(!element.done)//==false)
{
    console.log(element);
    element=k.next();
}