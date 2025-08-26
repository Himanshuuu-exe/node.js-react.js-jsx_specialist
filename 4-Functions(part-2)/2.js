function toy()
{
this.price=1000;
}

function add(x,y)
{
return x+y;
}

var t=new toy();
console.log("price of toy is " , t.price);
console.log("addn of x and y is " , add(10,20));
var t2=new toy();
console.log("price of toy is " , t2.price);
t2.price=2000;
console.log("price of toy is " , t2.price);