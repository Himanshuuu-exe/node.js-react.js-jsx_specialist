class movie
{
    start()
    {
        console.log('welcome');
    }

    interval()
    {
        console.log('interval - have a coffee');
    }

    end()
    {
        console.log("thanks - come again!");
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
}

var a=new jungleBook;
a.start();
a.reel1();
a.interval();
a.reel2();
a.end();

