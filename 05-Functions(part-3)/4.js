function sam(x,y)
{
    return x+y;
}

function tom(t,p,q)
{
    return t(p,q);
}

console.log(tom(sam,100,200));