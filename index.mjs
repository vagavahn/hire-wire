import express from 'express';
const app = express();

//app.get('/about', (req, res) =>{
//    res.send('hello user, this is route parameter test');
 //   console.log('route parameter test successful!!');
//});

var name = "";

for(var i = 2; i < process.argv.length; i++){
    name = String(process.argv[i]);
}

console.log("Hello my name is : " + name + "!");


//app.listen(3000);