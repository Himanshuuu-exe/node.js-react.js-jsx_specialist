var a=process.argv[2];

try 
{
    if(a=="good") b=20;
    console.log(b);
    }catch(error)
    {
        console.log(error.message);
    }
    finally
    {
        console.log("the end");
    }
