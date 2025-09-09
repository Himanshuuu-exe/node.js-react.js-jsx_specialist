function rectangle(length,width)
{
    this.length=length;
    this.width=width;
}

function box(length,width,height)
{
    this.height=height;

    rectangle.apply(this,arguments);
}

var a=new box(10,20,30);

console.log(a);
console.log(a.length);
console.log(a.width);
console.log(a.height);

