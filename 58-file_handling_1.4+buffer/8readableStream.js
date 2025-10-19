const fs=require('fs')

var readableStream=fs.createReadStream("abcd.d",{"flags":"r","encoding":"utf-8"});

readableStream.pipe(process.stdout);