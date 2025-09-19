class aaa{
    constructor()
    {
        this.x=10;
    }
}

class bbb extends aaa 
{
    constructor()
    {
        super();
        this.y;
    }
}

var m=new bbb();
console.log(m);
