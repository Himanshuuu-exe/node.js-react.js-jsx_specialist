function* myGenerator(a,b)
{
    while(a<=b)
    {
        yield a;
        a++;
    }
}

var k=myGenerator(10,20);
var element=k.next();

while(element.done==false)
{
    console.log(element);
    element=k.next();
}

