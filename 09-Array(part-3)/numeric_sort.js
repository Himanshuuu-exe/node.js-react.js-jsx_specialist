function myComparator(i,j)
{
    if(i==j) return 0;

    if(i<j) return -1;

    if(i>j) return 1;
}

var x=[40,50,60,55,66,,457,454];
var y=x.sort(myComparator);
console.log(y);