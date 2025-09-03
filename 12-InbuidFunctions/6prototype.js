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

    bulb.prototype.getBrand=function()
    {
        return "this is wattage "+this.w+" of brand phillips";
    }
}

var b=new bulb(60);
console.log(b.getBrand());
console.log(b);

//ab to getBrand aaya hi nahii bulb me, bhar to abhi bhi aara 

