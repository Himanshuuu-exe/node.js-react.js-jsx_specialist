function bulb()
{
    this.w=0;
    console.log(this);
    this.setWattage=function(wattage)
    {
        console.log(this);
        this.w=wattage;
    }
    this.getWattage=function()
    {
        console.log(this);
        return this.w;
    }
}

var b=new bulb();
b.setWattage("output is "+ 60);
console.log(b.getWattage());

