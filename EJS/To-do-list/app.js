const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
let items = [];
let workItems = [];
app.use(express.static('public'))

app.get('/', (req, res) => {
    const date = new Date();
    let day = new Date(date).toLocaleString('en-us', { weekday: 'long', day: '2-digit', month: 'long' })
    res.render('day', { Tittle: day, newItem: items });
});

app.post('/', (req, res) => {
    let item = req.body.newItem;
    if (req.body.list === 'Work') {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
});

app.get('/work', (req, res) => {
    res.render('day', { Tittle: "Work", newItem: workItems })
});

app.listen(3000, () => {
    console.log('server is running');
})