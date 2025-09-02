var b={
    w:0 ,

    setWattage: function(wattage){
        this.w=wattage;
    } ,

    getWattage: function(){
        return this.w;
    }
};

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

