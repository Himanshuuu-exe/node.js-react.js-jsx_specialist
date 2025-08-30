function boy()
{
this.rollNO=123;
this.name="sam";
this.gender="M";
}

var k=new boy();
console.log(k.gender);
console.log(k.name);
console.log(k.rollNO);

console.log('**********');

console.log(k["gender"]);
console.log(k["name"]);
console.log(k["rollNO"]);
console.log(k);

console.log('***************');

k.city="ujjain";
console.log(k);

console.log('*************************************');

k["work"]="private";
console.log(k);