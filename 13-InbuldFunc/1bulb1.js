function bulb()
{
    var brand="phillips";
    this._wattage=0;
}

Object.defineProperty(bulb.prototype,"wattage",
    {
        get : function()
        {
            console.log("getter");
            console.log(brand);
            return this._wattage;
        },

        set : function(ww)
        {
            console.log("setter");
            console.log(brand);
            this._wattage=ww;
        }
    }
);

var b=new bulb();
b.wattage=100;
console.log(b.wattage);