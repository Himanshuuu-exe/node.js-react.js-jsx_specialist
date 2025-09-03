function bulb(w)
{
    var wattage=w;
    this.getWattage=function()
    {
        return wattage;
    }

    bulb.prototype.getBrand=function()
    {
        return "bulb with wattage as : "+ this.getWattage()+ "  is of brand phillips";
    }
    
}

var b1=new bulb(60);
var b2=new bulb(100);
console.log("wattage is" , b1.getWattage());
console.log("iss" , b2.getWattage());

console.log( b1.getBrand())
console.log( b2.getBrand())

