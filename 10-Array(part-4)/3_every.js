var x=[10,20,30,40,37,60,70,80,90,100];
function doSomething(x)
{
    console.log("doSomething got called with arguments"+ x);
    return x%2==0;
}
console.log(x.every(doSomething));

console.log('**********************');

var x=[10,20,30,40,37,60,70,80,90,100];
function isEven(x)
{
    console.log("doSomething got called with arguments"+ x);
    return x%2==0;
}
console.log(x.every(isEven));

