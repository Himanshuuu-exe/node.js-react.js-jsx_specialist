function rectangle()
{
    this.length=1;
    this.width=2;
}

function box()
{
    this.height=3;

    rectangle.apply(this);
}

var a=new box();
console.log(a.height);
console.log(a.length);
console.log(a.width);
