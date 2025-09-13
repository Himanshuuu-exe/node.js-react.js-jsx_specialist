class aaa{
    static x=100;
    
    constructor()
    {
        this.y=500;
    }

    static sam()
    {
        console.log(aaa.x);
        console.log('great');
        console.log(this.y)
        console.log(this);
    }

    tom()
    {
        console.log(aaa.x);
        console.log('coool');
        console.log(this.y);
        console.log(this);
    }
}

let a=new aaa();
aaa.sam();
a.tom();

