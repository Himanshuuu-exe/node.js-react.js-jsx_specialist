const readline = require("readline");
const lineReader=readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

lineReader.question("enter your name:" , function(line){
	console.log(line);
	lineReader.close();
});

//console.log("this is really a cool thing");

