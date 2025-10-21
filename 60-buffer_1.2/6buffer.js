var c=Buffer.from("God is great");
console.log(c);
var d=c.toString("base64");
console.log(d);
var e=Buffer.from(d,"base64");
var f=e.toString("utf8");
console.log(f);