function someFunction()
{
    return class{
        constructor()
        {
            this.x=10;
        }
    };
}

class bbb extends someFunction()
{
    constructor()
    {
        super();
        this.y=20;
    };
}

var b=new bbb();
console.log(b);
