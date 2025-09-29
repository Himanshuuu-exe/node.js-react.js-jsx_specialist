function divide(dividend,divisor,onSucess,onError){
    setTimeout(function(){
        if(divisor==0){
            onError("can not divide by 0");
        }
        else{
            console.log('hiii');
            var quotient=Math.floor(dividend/divisor);
            var remainder=dividend%divisor;
            onSucess(quotient,remainder);
        }
    },5000);
}

var a=10;
var b=4;

function processResult(q,r){
    console.log('baooiii');
    console.log(`after dividing ${a} by ${b} , the quotient is ${q} and the remainder is ${r}`);
}

function processError(e){
    console.log(`problem : ${e}`);
}

divide(a,b,processResult,processError);