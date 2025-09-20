function someFunction()
{
    return class{
        constructor(){
            this.x=10;
        }
    }
}

var a=someFunction();
var b=new a();
console.log(b);
