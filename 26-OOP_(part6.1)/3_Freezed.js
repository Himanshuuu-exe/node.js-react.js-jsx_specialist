var a={x:10 , y:20}
console.log(a);
a.x=50;
console.log(a);
var b=Object.freeze({x:10 , y:20})
console.log(b);
b.x=6000;
b.y=56040;
console.log(b);

