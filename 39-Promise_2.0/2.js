var readline=require('readline');

function divide(dividend, divisor, onSucess, onError)
{
    setTimeout (function() {if(divisor==0){
        onError("can not divide by 0");
    }

    else
    {
        var quotient=Math.floor(dividend/divisor);
        var remainder=dividend%divisor;

        onSucess(quotient,remainder);
    }
},5000);
}

var iointerface=readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

var a=0;
var b=0;

function processResult(q,r){
    console.log(`on dividing ${a} by ${b}, quotient is ${q} and remainder is ${r}`);
}

function processError(e)
{
    console.log(`problem : ${e}`);
}

iointerface.question("enter dividend:" , function (answer){
    a=answer;
    iointerface.question("enter divisor", function(answer){
    b=answer;
    divide(a,b,processResult, processError);
    });
});


