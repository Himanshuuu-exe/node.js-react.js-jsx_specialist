function sam(n){
    if(n==1) return 1;

    var m=sam(n-1) * n;
    return m;
}

var x=sam(5);
console.log(x);