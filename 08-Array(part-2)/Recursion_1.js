function sam(k)
{
    if(k==4) return 1;
    sam(k+1);
    console.log(k);
}

sam(1);