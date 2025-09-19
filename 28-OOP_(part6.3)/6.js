class employee
{
    constructor(name)
    {
        this.name=name;
    }
}

var a=new employee("suresh");
console.log(a.name);
var b=new a.constructor("gopal");
console.log(b.name);
console.log(a==b);
console.log(a instanceof employee);
console.log(b instanceof employee);