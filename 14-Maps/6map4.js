var v=new Map();
v.set(101,"ramesh");
v.set(102, "suresh");
v.set(103, "lokesh");
v.set(104, "tina");
v.set(105, "lalita");
//console.log(v);

v[106]="govinda";
console.log(v);
console.log(v.has(102));
console.log(v.has(106));

