function sam(p)
{
    if(p==1) return 1;
    var n=sam(p-1)*p;
    return n;
}

var x=sam(7);
console.log(x);

