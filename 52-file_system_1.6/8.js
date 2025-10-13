var fs=require("fs");

fs.readdir(".",function(e,files){
    files.forEach(function(file){
        fs.stat(file,function(error,stat){
            if(stat.isFile()) console.log("file "+file);
            if(stat.isDirectory()) console.log("directory 0"+file);
        });
    });
});