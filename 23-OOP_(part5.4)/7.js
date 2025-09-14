let bulb={
    _wattage : 0,

    set wattage(w){
        console.log("this is setter");
        if(w>0 && w<240) _wattage=w;
        else _wattage=0;
    },

    get wattage()
    {   
        console.log('this is getter');
        return _wattage;
    }
};

bulb.wattage=100;
console.log(bulb.wattage);