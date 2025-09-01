function dosomething(f,x,y)
{
    return f(x,y);
}

console.log(dosomething(function(p,q){return p*q;}
, 15 , 200 ));