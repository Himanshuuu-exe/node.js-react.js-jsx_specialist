var fs=require("fs");

fs.mkdir("bkc/pqr/lmn",{recursive:true},function(e){
    if(e){
        console.log(e);
    }
    else{
        console.log("folder created");
    }
});

