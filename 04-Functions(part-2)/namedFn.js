// named function

function dosomething(x,y)
{
	return x+y;
}

console.log("ans is" , dosomething(10,20));
var a=dosomething;
console.log("ans is" , a(100,200));

//named expression function

var k=function second(x,y)
{
	return x+y;
}

console.log("ans is " , k(200,200));

//console.log("that would be wrong" , second(10,20));

