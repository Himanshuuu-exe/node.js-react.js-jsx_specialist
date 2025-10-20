var c=Buffer.alloc(10,1);
console.log(c);
c.fill(0);
console.log(c);
c[0]=10;
c[1]=20;
c[2]=43;

for(var i of c){
    console.log(i);
}

console.log('length is:'+c.length);