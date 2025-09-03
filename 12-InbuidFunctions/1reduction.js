function reduceFn(a,b,c,d) 
{
console.log("reduce got called with ");
console.log(a);
console.log(b);
console.log(c);
console.log(d);

return a+b;
}

x=[10,20,30,40,50];
var y=x.reduce(reduceFn);
console.log(y);
