var v=new Map();
v.set(101,"ramesh");
v.set(102, "suresh");
v.set(103, "lokesh");
v.set(104, "tina");
v.set(105, "lalita");
console.log(v);

a=v.get(103);
console.log(a);
console.log(v.has(104));
console.log(v.has(1004));

console.log('***********************');

v.forEach(function(a,b,c)
{
    console.log("value " +a);
    console.log("key " +b);
    console.log("the whole map ", c);
});

console.log('***********************');

var k=v.entries();
var element;
element=k.next();
while(!element.done)
{
    console.log(element)
    element=k.next();
}

console.log('***********************');

var k=v.entries();
var element;
element=k.next();
while(!element.done)
{
    console.log(element.value);
    [ key , value ]=element.value;
    console.log("key:" + key + ",value:" +value);
    element=k.next();
}

console.log('*******last segment************');

var vals=v.values();
element=vals.next();
while(!element.done)
{
    console.log(element);
    element=vals.next();
}

console.log('*******--------************');

var keys=v.keys();
element=keys.next();
while(!element.done)
{
    console.log(element);
    element=keys.next();
}

console.log('******///////////************');

for(var elem of v)
{
    console.log(elem);
    [a,b]=elem;
    console.log("key:" +a+ ",value:" +b);
} 

