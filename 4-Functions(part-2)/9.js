function add(x,y,z)
{
console.log(arguments);
console.log(arguments.length);  
var i;
var total=0; 
for(i=0; i<arguments.length; i++)
{
	console.log(arguments[i]);
	total=total+arguments[i];
}
return total;
}
console.log("total is" , add(10,20,30));
