const fs=require('fs');
var bufferSize=10; //should be 1024 or 4056
var buffer=Buffer.alloc(bufferSize);
file="index.html";
console.log('opening file',file);
var fileDescriptor=fs.openSync(file,"r");
var data;
var bytesExtracted;

while(true)
{
    bytesExtracted=fs.readSync(fileDescriptor,buffer,0,bufferSize);
    if(bytesExtracted==0)
    {
        fs.closeSync(fileDescriptor);
        break;
    }

    if(bytesExtracted<bufferSize)
    {
        data=buffer.slice(0,bytesExtracted); 
    }

    else
    {
        data=buffer;
    }

    //console.log(data.toString);
    process.stdout.write(data.toString());
}