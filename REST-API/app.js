const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engin", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
const uri =
  "mongodb+srv://mitul:mitul5pro@cluster0.uhuivz6.mongodb.net/?retryWrites=true&w=majority/wikiDB";

// Connecting to database
mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
  if (err) console.log(err);
});

const articleSchema = {
  tittle: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

const first = new Article({
  tittle:
    "To create integrations, retrieve data, and automate your workflows, build with the GitHub REST API",
  content:
    "Most applications will use an existing wrapper library in the language of your choice, but it's important to familiarize yourself with the underlying API HTTP methods first no easier way to kick the tires than through cURL. If you are using an alternative client, note that you are required to send a valid User Agent header in your request",
});
// first.save((err) => {
//   if (err) console.log(err);
// });

app.listen(3000, function () {
  console.log("server started on port 3000");
});
