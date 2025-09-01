function add(x,y,z)
{
    return x+y+z;
}

function whatever(f)
{
    return function(p,q){
        return f(p,q,0);
    }
}

var addIt=whatever(add);
console.log(addIt(10,20));