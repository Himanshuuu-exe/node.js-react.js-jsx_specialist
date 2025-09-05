var v=new Map();
v.set(101,"ramesh");
v.set(102, "suresh");
v.set(103, "lokesh");
v.set(104, "tina");
v.set(105, "lalita");
console.log(v);

a=v.get(103);
console.log(a);
console.log(v.has(104));
console.log(v.has(1004));

console.log('***********************');

v.forEach(function(a,b,c)
{
    console.log("value " +a);
    console.log("key " +b);
    console.log("the whole map ", c);
});

