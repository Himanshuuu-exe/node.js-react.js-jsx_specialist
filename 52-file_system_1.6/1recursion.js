function sam(e){
    if(e==4) return;
    sam(e+1);
    console.log(e);
}

sam(1);