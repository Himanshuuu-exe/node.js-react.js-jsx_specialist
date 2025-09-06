var m={
    collection : [] ,
    add : function(num)
    {
        this.collection.push(num);
    } ,
    iterator : function* ()
    {
        var index=0;
        while(index<this.collection.length)
        {
            yield this.collection[index];
            index++;
        }
    }
};

m.add(43);
m.add(234);
m.add(43);
m.add(55);

var k=m.iterator();

for(var i of k)
{
    console.log(i);
}

