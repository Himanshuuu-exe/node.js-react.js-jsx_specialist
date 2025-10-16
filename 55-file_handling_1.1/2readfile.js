const fs=require('fs')

fs.readFile("somefile.d","utf-8",(error,data)=>{
    if(error){
        console.log("problem:",error);
    }
    else{
        console.log(data);
    }
})