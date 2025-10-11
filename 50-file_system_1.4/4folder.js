var fs=require("fs");

fs.mkdir("kkk",{},function(e){
    if(e){
        console.log(e);
    }
    else{
        console.log("folder created");
    }
});

console.log("directory created");

