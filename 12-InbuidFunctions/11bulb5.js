function bulb()
{
    this._wattage=0;
}

Object.defineProperty(bulb.prototype,'wattage',
    {
        get : function()
        {
            console.log("getter got called");
            return this._wattage;
        },

        set : function(w)
        {
            console.log("setter got called");
            this._wattage=w;
        }
    }
);
console.log("start");
var b=new bulb();
b.wattage=60;
console.log(b.wattage);
console.log("1 end");
var b2=new bulb();
b2.wattage=100;
console.log(b2.wattage);

