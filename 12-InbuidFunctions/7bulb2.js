function bulb(w)
{
    var wattage=w;
    this.getWattage=function()
    {
        return wattage;
    }

    bulb.prototype.getBrand=function()
    {
        return "---this is wattage "+wattage+" of brand phillips";
        
    }
    
}

var b1=new bulb(60);
var b2=new bulb(100);
console.log("wattage is" , b1.getWattage());
console.log("iss" , b2.getWattage());
console.log(b1.wattage);
console.log(b2.wattage);

console.log("brand is" , b1.getBrand())
console.log("brand is" , b2.getBrand())

//still not comming inside

