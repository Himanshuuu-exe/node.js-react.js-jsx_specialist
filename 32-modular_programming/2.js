aaa=(someClass)=>class extends someClass
{
    constructor()
    {   
        super();
        this.x=10;
    }
}

bbb=(someClass)=>class extends(someClass)
{
    constructor()
    {
        super();
        this.y=20;
    }
}

class ccc extends bbb(aaa(Object))
{
    constructor()
    {
        super();
        this.z=30;
    }
}

class ddd extends bbb(Object)
{
    constructor()
    {
        super();
        this.z=40;
    }
}

var c=new ccc();
console.log(c);

var d=new ddd();
console.log(d);