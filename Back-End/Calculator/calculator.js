//jshint esverson:6


const express = require('express');
const bodyParser = require('body-parser'); // This is the body parser for sending and request 

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // .urlencoded is used when we want the data from the form.
// bodyParser allows us the tap in to any roots req.body
app.get('/',(req,res)=>{
    const path = __dirname; 
    res.sendFile(path+'/index.html'); // to send the entire the file we use the sendFile methord
});

app.post("/", (req,res)=>{ 
    console.log(req.body);
    var sum =   parseInt(req.body.num1) + parseInt(req.body.num2);
    res.send("The sum is " + sum);
});

app.listen(3000,()=>{
    console.log('Server is running at port 3000');
});
