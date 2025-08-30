var x;
x= new Array();
x[0]=new Array(5);
x[1]=56;
x[2]=57;
x[3]=new Array("godo","bad","ugly");
x[4]=new Array(2);
x[4][0]=[10,20,30];
x[4][1]=["great" , "indian" , 444 , "places"];
console.log(x);

function displayContentOfAnArray(p)
{
    console.log("processing start");
    if(Array.isArray(p)) 
    {
        var i=0;
        while(i<p.length)
        {
            var j=p[i];
            if(Array.isArray(j)) displayContentOfAnArray(j);
            else console.log(j);
            i++;
        }
    }

    else console.log(p);
}

displayContentOfAnArray(x);