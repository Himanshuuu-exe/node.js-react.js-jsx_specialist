var b={
    w:0 ,

    setWattage: function(wattage){
        w=wattage;
    } ,

    getWattage: function(){
        return w;
    }
};

function king()
{   console.log('///////////////')
    console.log(w);
    console.log('++++++++++++')
    console.log(this);
    console.log('------------')
    console.log(this.w);
}

console.log('-----------');
console.log(b);
console.log('************')
console.log(b.w);
console.log('++++++++++++')
b.setWattage(100);
console.log('///////////////')
console.log(b.w);
console.log('-----------')
console.log(b.getWattage());
console.log('***************')
king();

