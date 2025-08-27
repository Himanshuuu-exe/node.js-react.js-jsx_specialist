//spread syntax
function add(x,y,z,a,b){
    return x+y+z+a+b;
}

var a=[10,20,30,40,50];
var b=[10,20,30,40,50];
console.log(add(...a));
console.log(add(50,...b));