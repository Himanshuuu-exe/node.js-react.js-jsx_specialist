class PostCard
{
    constructor(from,to,message){
        this.from=from;
        this.to=to;
        this.message=message;
    }
}

var k=new PostCard("raamesh ji","suresh ji", "hello ji");

console.log(k);

var a=JSON.stringify(k);
console.log(a);

var b=JSON.parse(a);
console.log(b);
console.log(b.from);
console.log(b.to);
console.log(b.message);