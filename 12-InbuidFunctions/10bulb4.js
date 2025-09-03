function bulb(w)
{   var wattage;
    if(w)
    {   
        if((typeof w)=="number")
        {
            if(w>=0 && w<=240)
            {
                wattage=w;
            }
            else wattage=0
        }
        else wattage=0;
    }
    else wattage=0;

    this.getWattage=function()
    {
        return wattage;
    }

    this.setWattage=function(w)
    {   
      if(w)
    {   
        if((typeof w)=="number")
        {
            if(w>=0 && w<=240)
            {
                wattage=w;
            }
            else wattage=0
        }
        else wattage=0;
    }
    else wattage=0;
  
    }
     
}

var b1=new bulb();
console.log(b1.getWattage());
var b2=new bulb(60);
console.log(b2.getWattage());
b2.setWattage(93);
console.log(b2.getWattage());
//b2.getWattage();
var b3=new bulb();
b3.setWattage(80);
console.log(b3.getWattage());

