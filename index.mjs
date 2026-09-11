import express from 'express';
const app = express();

//app.get('/about', (req, res) =>{
//    res.send('hello user, this is route parameter test');
 //   console.log('route parameter test successful!!');
//});

var calc = 0;

for(var i = 2; i < process.argv.length; i++){
    var str = String(process.argv[2]);

    if(str[1] == '+'){
        console.log(Number(str[0]) + Number(str[2]));
    }
}



//app.listen(3000);