const fs=require("fs");
var d=fs.readFileSync("eg1.exe");

var file=fs.openSync("cool.exe","w");

fs.writeSync(file,d,0,d.length);
fs.closeSync(file);
