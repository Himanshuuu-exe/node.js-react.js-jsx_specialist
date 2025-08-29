function ReportGenerator()
{
    this.title="financial report 2025";    
    this.getReport=function()
    {
        console.log("setting up reporter fn with title" + this.title);
        var that=this;
        return function(){
        console.log(that.title);
        console.log("some dataa");
    }
    }
}

var rg=new ReportGenerator();
var reporter=rg.getReport();
console.log("****************");
reporter();