const fs=require('fs')

var readableStream=fs.createReadStream("abcd.d",{"flags":"r","encoding":"utf-8"});

readableStream.on('data',function(p){
    console.log("data fetched:",p);
});
