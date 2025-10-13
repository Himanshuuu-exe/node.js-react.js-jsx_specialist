var fs=require("fs");

fs.readdir(".",function(e,files){
    console.log(files);
});
