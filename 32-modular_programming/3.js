var hr=require("./4hr")
var d1=new hr.designation(101, "clerk");
var d2=new hr.designation(102, "manager");

var dm=new hr.DesignationManager();
dm.add(d1);
dm.add(d2);

var designation=dm.getAll();
var e=0;
while(e<designation.length)
{
    console.log(designation[e].code , designation[e].title);
    e++;
}

