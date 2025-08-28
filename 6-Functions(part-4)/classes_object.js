function toy()
{
    this.brand="";
    this.price=0;
    this.mannual=function()
    {
        console.log("blah blah blah about the toy of brand" + this.brand + "which is a toy");
    }
}

var t1=new toy();
var t2=new toy();

t1.brand=" legoo ";
t1.price=1000;
t2.brand=" Hott wheels ";
t2.price=2000;

console.log("brand:" , t1.brand, "and price:", t1.price);
console.log("brand:" , t2.brand, "and price:" , t2.price);

t1.mannual();
t2.mannual();
