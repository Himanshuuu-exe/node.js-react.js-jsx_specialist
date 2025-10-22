const fs=require("fs");
var d=fs.readFileSync("eg1.exe");
console.log(Buffer.isBuffer(d));

var e=fs.readFileSync("eg1.c","utf8");
console.log(Buffer.isBuffer(e));
console.log(d);
console.log("------------");
console.log(e);