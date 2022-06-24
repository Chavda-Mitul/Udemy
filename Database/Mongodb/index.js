var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var database = db.db('firstdb');
    database.createCollection('secondCollection', (err, res) => {
        if (err) throw err;
        console.log('collection created');
        db.close();
    });
});