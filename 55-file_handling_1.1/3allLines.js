const fs=require('fs')

fs.readFile("somefile.d","utf-8",function(error,data){
    if(error)
    {
        console.log("problem",error)
    }

else{
var k=data.split("\n");
console.log("no of lines in file:"+(k.length-1));
k.forEach(function(line){
    if(line.length>0) console.log("line:",line);
});
}
});
