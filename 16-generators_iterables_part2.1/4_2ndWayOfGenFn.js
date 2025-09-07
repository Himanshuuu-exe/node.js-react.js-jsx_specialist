var c="kite";
var a={}
a["good"]="bad";
console.log(a.good);
a[c]="cool";
console.log(a);

a[Symbol.iterator]=function*()
{
    yield 10;
    yield 20;
    yield 30;
}

for(var i of a)
{
    console.log(i);
}

var jk=[...a];
console.log(jk);

