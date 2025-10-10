var fs=require("fs");

function mySync(){
var promise=new Promise(function(resolve,reject){
fs.mkdir("kkk",{},function(e){
    if(e){
        console.log(e);
    }
    else{
        console.log("folder created");
    }
});

})
return promise;
}


async function main(){
    var s=await mySync("kkk");
    console.log(s);
    console.log("*********");
}

main();

console.log("directory created");