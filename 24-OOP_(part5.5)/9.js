let rectangle={
    length : 20,
    breadth : 2
};

let box={
    ...rectangle,
    height : 3
};

let box2=box;
box2.height=100;
console.log(box);
console.log(box2);
let box3={...box}
box3.height=50;
console.log(box);
console.log(box2);
console.log(box3);