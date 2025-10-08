var fs=require("fs");

fs.stat("1fs.js",function(e,s){
    console.log(s);
});

console.log("details of file:1fs.js");