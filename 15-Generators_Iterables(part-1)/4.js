function* range(s,e)
{
    while(s<=e)
    {
        yield s;
        s++
    }
}

var k=range(10,20);

for(var e of k)
{
    console.log(e);
}

