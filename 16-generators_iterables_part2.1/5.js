function abcd()
{
    this[Symbol.iterator]=function*()
    {
        yield 10;
        yield 20;
        yield 30;;
    }
}

var a=new abcd();

for(var i of a)
{
    console.log(i);
}

var jk=[...a];
console.log(jk);

