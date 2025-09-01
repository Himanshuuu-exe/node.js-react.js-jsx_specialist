function add(x,y,z,a,b,c)
{
    return x+y+z+a+b+c;
}

function sam()
{
    var i=add(...arguments);
    return i;
}

console.log(sam(1,2,3,4,5,6));