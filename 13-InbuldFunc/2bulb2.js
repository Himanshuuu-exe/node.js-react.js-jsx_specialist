function bulb()
{
    var brand="philips";
    this.aFunction=function()
    {
        console.log(brand);
    }
}

bulb.prototype.bFunction=function()
{
    console.log(brand);
}

var b1=new bulb();
b1.aFunction();
b1.bFunction();

