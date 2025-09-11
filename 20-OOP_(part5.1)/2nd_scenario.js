class movie 
{
    start()
    {
        console.log('this is start of movie');
    }

    interval()
    {
        console.log('this is interval have a cofee');
    }
    
    end()
    {
        console.log('this is end of the movie');
    }
}

class jungleBook extends movie
{
    reel1()
    {
        console.log('mowgli enters the jungle');
    }

    reel2()
    {
        console.log('bageera saves the mowglii');
    }

    interval()
    {
       console.log("this time have a teaaa***"); 
    }
}

var a=new jungleBook;
a.start();
a.reel1();
a.interval();
a.reel2();
a.end();