let a={
    someFunction(g)
    {
        console.log(g);
    }
};

var k=a.someFunction.bind(a,"great");
k();