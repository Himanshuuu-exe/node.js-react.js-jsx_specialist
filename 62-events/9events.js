const events=require("events");
class Bulb extends events.EventEmitter{
    constructor(){
        super();
        this._wattage=0;
    }

    set wattage(value){
        console.log("setter got called");
        if(this._wattage==value) return;
        let oldWattage=this._wattage;
        this._wattage=value;

        super.emit("WattageChanged",oldWattage,this._wattage);
    }

    get wattage(){
        console.log("getter got called");
        return this._wattage;

    }
}

var b1=new Bulb();
b1.on("WattageChanged",function(oldWattage,newWattage){
    console.log(`wattage has changed from ${oldWattage} to ${newWattage}`)});
    b1.wattage=60;
    console.log(b1.wattage);
    b1.wattage=100;
    console.log(b1.wattage);
