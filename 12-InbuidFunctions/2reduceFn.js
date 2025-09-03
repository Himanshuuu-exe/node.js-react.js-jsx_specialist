function reduceToMax(initialORlastVal, currentVal, index, arr)
{
    console.log("reduce to max got called with " , initialORlastVal, currentVal, index,arr);
    //console.log("///////////////");

    if(initialORlastVal>currentVal)
    {
        return initialORlastVal;
    }

    else return currentVal;
}

x=[40,10,50,67,405,6,44,497,53,5];
var y=x.reduce(reduceToMax);
console.log("ans is" , y);

