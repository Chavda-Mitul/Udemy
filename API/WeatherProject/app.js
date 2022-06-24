const { response } = require('express');
const express = require('express');
const { sendfile, sendFile } = require('express/lib/response');
const https = require('https');
const { url } = require('inspector');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
const path = __dirname;
app.get('/', (req, res) => {
    res.sendFile(path + "/index.html");
});


app.post("/", (req, res) => {
    console.log("Post recieved");
    const city = req.body.city;
    const key = "0b66756d04e654c3808636a15478eb18";
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + city + "&appid=" + key;
    https.get(url, (response) => {
        console.log(response.statusCode);
        response.on("data", (data) => {
            const weaterData = JSON.parse(data);
            const temp = weaterData.main.temp;
            const description = weaterData.weather[0].description;
            const iconName = weaterData.weather[0].icon;
            const weatherIcon = 'https://openweathermap.org/img/wn/' + iconName + '@4x.png';
            res.write(`<h1 style="text-align:center;">` + "The temprature in the " + city + " is " + temp + " degrees Celcius</h1>");
            res.write(`<img style = "display: block;margin: auto;" src=${weatherIcon} alt="weatherImage">`);
            res.write(`<h2 style="color: red; text-align:center;">The weather is ` + description + " in " + city + " </h2>");
            res.send();
        })
    })

})

app.listen(3000, () => {
    console.log('server is running');
});