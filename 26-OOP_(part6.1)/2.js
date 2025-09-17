function printSum(x,y)
{
    let z=x+y;
    console.log(x,y);
    console.log("sum:" , +z);
    return z;
}

var add5=printSum.bind(undefined ,5);
let j=add5(10);
console.log(j);