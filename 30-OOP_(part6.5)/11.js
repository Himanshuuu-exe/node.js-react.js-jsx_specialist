class aaa{
    constructor()
    {
        this.x=10;
    }
}

function aFunction(someClass)
{
    return class extends someClass
    {
        constructor()
        {
            super();
            this.y=0;
        }
    }
}

class bbb extends aFunction(aaa)
{
    constructor()
    {
        super();
        this.z=30;
    }
}

var b=new bbb();
console.log(b);
