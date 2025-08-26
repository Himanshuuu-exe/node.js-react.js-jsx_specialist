//dynamically defining property
function toy()
{
this.price=1000;
}

var t=new toy();
console.log("price is" , t.price);
t.brand="legoo";									//<--- here
console.log(t.brand);