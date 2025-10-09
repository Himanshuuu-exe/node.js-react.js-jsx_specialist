var fs=require("fs");

function getStats(f){
    var promise=new Promise(function(resolve,reject){
        fs.stat(f,function(e,s){
            resolve(s);
        });
    });
return promise;
}

async function main()
{
    var s=await getStats("2fs.js");
    console.log(s);
    console.log("details of file 2fs.js");
}

main();