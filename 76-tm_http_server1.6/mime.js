const m=require('mime-types');
file="index.html";
console.log(m.lookup(file));
file="1server.js";
console.log(m.lookup(file));
file="img.jpg";
console.log(m.lookup(file));