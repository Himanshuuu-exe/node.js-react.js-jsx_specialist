function* myGenerator()
{
    console.log("somehting");
    yield 10;
    yield 20;
    yield 30;
    console.log("whatever");
}

var k=myGenerator();

var i=k.next();
console.log(i);
i=k.next();
console.log(i);
i=k.next();
console.log(i);

