var x=[100,200,300,400,500,600];
var j=x.splice(3,2,700,800);
console.log(x);
console.log(j);

console.log('**************');

var a=[100,200,300,400,500,600];
var b=a.splice(4,4,[700,800,900,100]);
console.log(a);
console.log(b);

console.log('**************');

var a=[100,200,300,400,500,600];
var b=a.splice(a.length,0,700,800);
console.log(a);
console.log(b);

console.log('**************');

var a=[100,200,300,400,500,600];
var b=[700,800,900,100];
for(var i=0; i<b.length; i++){
    a.splice(a.length,0,b[i]);
}
console.log(a);