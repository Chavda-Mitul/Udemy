//js6 esversion:6
const express = require('express');

const app = express();

app.get("/",function(request,response){
    response.send('<h1> Hello </h1>');
});

app.get("/home",function(request,response){
    response.send('<h1>Welcome to the Home page !</h1>'+'<h2>This is Mitul Chavda here!</h2>' + '<p> I am a 2nd year cs student.');
});



app.listen(3000,function(){
    console.log('this is my server on port 3000');
});

