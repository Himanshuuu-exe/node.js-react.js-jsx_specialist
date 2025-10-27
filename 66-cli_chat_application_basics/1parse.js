var k={
    "from" : "ramesh",
    "to" : "suresh",
    "message" : "Hello"
};

console.log(k);

var a=JSON.stringify(k);
console.log(a);

var b=JSON.parse(a);
console.log(b);

console.log(b.from);
console.log(b.to);
console.log(b.message);