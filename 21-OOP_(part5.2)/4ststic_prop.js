class aaa{
    static x;
    constructor(a,b)
    {
        aaa.x=a;
        this.y=b;
    }
}

var c=new aaa(10,20);
console.log(aaa.x);
console.log(c);
var d=new aaa(5050,6060);
console.log(d);
console.log(aaa.x);