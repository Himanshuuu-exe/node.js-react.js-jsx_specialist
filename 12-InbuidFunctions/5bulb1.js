function bulb(w)
{
    this.w=w;

    this.setWattage=function(w)
    {
        this.w=w;
    }

    this.getWattage=function()
    {
        return this.w;
    }

    this.getBrand=function()
    {
        return "this is wattage"+this.w+"of brand phillips";
    }
}

var b=new bulb(60);
console.log(b.getBrand());
console.log(b);

//getBrand aaya par uske ander ka print nahi hua 

