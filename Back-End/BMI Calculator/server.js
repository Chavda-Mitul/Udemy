const express = require('express');
const bodyParser = require('body-parser');
const { use } = require('express/lib/application');

const app = express();
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/",(req,res)=>{
    const path = __dirname;
    res.sendFile(path+"/bmiCalculator.html");
});

app.post("/",(req,res)=>{
    // console.log(req.body);
    var BMI = req.body.weight/req.body.height;
    // console.log(BMI);
    res.send("Your BMI is "+BMI);
})


app.listen(3000,()=>{
    console.log('Server running');
});