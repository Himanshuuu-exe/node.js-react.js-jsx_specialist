class rectangle
{
    constructor(length, breadth)
    {
        this.length=length;
        this.breadth=breadth;
    }
}

class box extends rectangle
{
    constructor(length, breadth, height)
    {
        super(length,breadth);
        this.height=height;
    }
}

var a=new box(10,20,30);

console.log(a);

