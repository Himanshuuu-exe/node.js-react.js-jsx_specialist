class aaa{
    constructor()
    {
        this.x=10;
    }
}

function aFunction()
{
    return aaa;
}

function bFunciton(someClass)
{
    return class extends someClass
    {
        constructor()
        {
            super();
            this.y=20;
        }
    }
}

var bbb=bFunciton(Object);

class ccc extends bFunciton(aFunction())
{
    constructor()
    {
        super();
        this.z=30;
    }
}

class ddd extends bFunciton(Object)
{
    constructor()
    {
        super();
        this.t=503;
    }
}

var b=new bbb();
console.log(b);
var c=new ccc();
console.log(c);
var d=new ddd();
console.log(d);

