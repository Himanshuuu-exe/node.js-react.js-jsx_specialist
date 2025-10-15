const fs=require('fs')
fs.appendFile("somefile.d","ujjain is the city of gods \ni live in ujjain","utf-8",function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("data written to the file");
    }
});