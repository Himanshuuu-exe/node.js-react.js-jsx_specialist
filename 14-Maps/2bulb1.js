var bulb=(function()
{
    var code=0;
    var ds={};

    function bulbConstructor(br)
    {
        code=code+1;
        this.code=code;
        ds[this.code]={};
        ds[this.code].brand=br;

        this.aFunction=function()
        {
            console.log(ds[this.code].brand);
        }
    }

    bulbConstructor.prototype.bFunction=function()
    {
        console.log(ds[this.code].brand);
    }

    return bulbConstructor;
})();

var b1=new bulb("philps");
b1.aFunction();
b1.bFunction();
var b2=new bulb("bajaj");
b2.aFunction();
b2.bFunction();
b1.aFunction();
b1.bFunction();

