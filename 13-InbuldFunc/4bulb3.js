var bulb=(function()
{
    var brand;

    function bulbConstructor(bb)
    {
        brand=bb;
        this.aFunction=function()
        {
            console.log(brand);
        }
    }

    bulbConstructor.prototype.bFunciton=function()
    {
        console.log(brand);
    }

    return bulbConstructor;
})();

var b1=new bulb("philps");
b1.aFunction();
b1.bFunciton();
var b2=new bulb("bajaj");
b2.aFunction();
b2.bFunciton();
b1.aFunction();
b1.bFunciton();