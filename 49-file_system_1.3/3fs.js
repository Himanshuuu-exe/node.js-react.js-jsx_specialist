var fs=require("fs");

fs.stat("aaa",function(e,s){
    if(e){
        console.log(e);
    }

    else{
        console.log(s);
        console.log(s.isFile());
        console.log(s.isDirectory());
    }
});