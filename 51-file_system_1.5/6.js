var fs=require("fs");

fs.rm("bkc",{recursive:true},function(e){
    if(e){
        console.log(e);
    }
    else{
        console.log("done");
    }
});
