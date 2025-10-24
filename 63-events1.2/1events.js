const events=require("events");

class BulbEvent{
    constructor(oldWattage, newWattage, bulb){
        this._oldWattage=oldWattage;
        this._newWattage=newWattage;
        this._bulb=bulb;
    }

    get oldWattage(){
        return this._oldWattage;
    }

    get newWattage(){
        return this._newWattage;
    }

    get bulb(){
        return this._bulb;
    }
}

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
        var BulbEvents=new BulbEvent(oldWattage, this._wattage, this);
        super.emit("wattageChanged",BulbEvents);
    }

    get wattage(){
        console.log("getter got called");   
        return this._wattage;
    }
}

var b1=new Bulb();
var b2=new Bulb();

function wattageChangedHandler(bulbEvent){
    if(bulbEvent.bulb==b1){
        console.log(`bulb 1: wattage has changed from ${bulbEvent.oldWattage} to ${BulbEvent.newWattage}`)
    }

    if(bulbEvent.bulb==b2){
        console.log(`bulb 2 : wattage has changed from ${bulbEvent.oldWattage} to ${BulbEvent.newWattage}`)
    }
}

b1.on("wattageChanged",wattageChangedHandler);
b2.on("wattageChanged",wattageChangedHandler);

b1.wattage=60;
console.log(b1.wattage);
b1.wattage=100;
console.log(b1.wattage);
b2.wattage=40;
console.log(b2.wattage);