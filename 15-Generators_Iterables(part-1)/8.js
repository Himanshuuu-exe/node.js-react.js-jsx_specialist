var k="cool";

function somehting()
{
    this[k]="mind blowing";
}

var m=new somehting();
console.log(m);
console.log(m.cool);