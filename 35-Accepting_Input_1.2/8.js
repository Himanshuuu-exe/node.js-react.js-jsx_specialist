function someFunction()
{
console.log("cool");
setTimeout(someFunction , 2000);
}

setTimeout(someFunction, 10000);
console.log("great");
