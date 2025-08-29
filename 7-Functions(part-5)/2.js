function toy()
{
    var brand="phillips";
    this.price=0;

    this.printPrice=function()
    {
        console.log("price is :" , this.price);
    }

    this.getBrand=function()
    {
        return brand;
    }

    function doSomething()
    {
        console.log("whatever");
    }

    this.sam=function()
    {
        doSomething();
    }
}

var t1=new toy();
console.log(t1.brand);
console.log(t1.getBrand());
t1.sam();
t1.printPrice();
//t1.doSomething();