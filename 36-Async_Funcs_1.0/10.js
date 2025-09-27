var tm=null;
var x=0;

function someFunction(a,b,c)
{
x++;
console.log(x,"cool",a,b,c);
if(x==3) clearInterval(tm);
}

tm=setInterval(someFunction, 2000 ,10,20,"good");
console.log("great");
