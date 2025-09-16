function someFunction(g)
{
    console.log(g);
}


var k=someFunction.bind(undefined,"great");
console.log(k);
k();

