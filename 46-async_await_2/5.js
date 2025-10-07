var readline=require('readline');
var ioInterface=readline.createInterface({
    "input" : process.stdin,
    "output" : process.stdout
});

function Question(q)
{
    var promise=new Promise(function(resolve,reject){
        ioInterface.question(q,function(answer){
            resolve(answer);
        });
    });
return promise;
}

async function main()
{
    var name=await Question("Enter Name");
    var city=await Question("enter city name");
    var age=parseInt(await Question ("enter your age"));
    console.log("data accepted");
    console.log("name:"+name);
    console.log("city:"+city);
    console.log("age:"+age);
    ioInterface.close();
}

main();