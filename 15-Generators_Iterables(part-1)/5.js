function myCollection()
{
    var collection=[];
    this.add=function(num)
    {
        collection.push(num);
    }

    this.iterator=function* ()
    {
        var index=0;
        while(index<collection.length)
        {
            yield collection[index];
            index++;
        }
    }
}

var k=new myCollection();
k.add(100);
k.add(20);
k.add(30);
k.add(40);

var m=k.iterator();
for(var i of m)
{
    console.log(i);
}

