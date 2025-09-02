function sam()
{
    this.a=100;
    console.log(this);
}

this.x=200;
console.log(this);
console.log('+++++++++++++++++');
sam();
console.log('**************');
var a=new sam();
console.log('--------------');

