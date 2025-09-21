class aaa{
    constructor()
    {
        this.x=10;
    }
}

class bbb
{
    constructor()
    {
        this.y=20;
    }
}

class ccc extends (aaa+bbb)
{
    //error
}