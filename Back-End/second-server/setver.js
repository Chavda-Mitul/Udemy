//jshint esversion:6
const express = require('express');
const app = express();

app.listen(3000,() =>{
    console.log('server started');
});

app.get('/',(req,res) =>{
    res.send('<h1>Mitul</h1>');
});


app.get('/contact',(req,res)=>{
    res.send('Contact me at mitulchavda100@gmail.com');
});




