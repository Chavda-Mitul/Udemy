//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// for database
mongoose.connect('mongodb+srv://mitul:mitul5pro@cluster0.uhuivz6.mongodb.net/?retryWrites=true&w=majority/todolistDb', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
},(err)=>{
  if(err){
      console.log(err);
  }else{
      console.log('connected successfully');
  }
});

const toDoListSchema = new mongoose.Schema({
  name : String
});

const Item = new mongoose.model('Item',toDoListSchema);

const item1 = new Item({
  name : 'Welcome to the todolist!' 
});

const item2 = new Item({
  name : 'Hit the + to add the item.'
});

const item3 = new Item({
  name : '<--- this to delete the item.'
});

const listSchema = {
  name : String,
  items : [toDoListSchema]
};

const List = new mongoose.model('List',listSchema);

// Item.find((err,doc)=>{
//   if(err)
//   console.log(err);
//   else
//   console.log(doc);
// })

// Item.deleteMany({$or : [{ name : 'Welcome to the todolist!' }, { name : 'Hit the + to add the item.'},{name : '<--- this to delete the item.'}]}, (err)=>{
//   if(err)
//   console.log(err);
//   else
//   console.log('successfully deleted');
// })

app.get("/", function(req, res) {

const day = date.getDate();

const item = Item.find({},(err,doc)=>{
  if(doc.length == 0){
    Item.insertMany([item1,item2,item3],(err)=>{
      if(err)
      console.log(err);
    });
  }
  if(err)
  console.log(err);
  res.render("list", {listTitle: day, newListItems: doc});
});

});

app.post("/", function(req, res){
  const item = new Item({
    name : req.body.newItem 
  });
  item.save();
  res.redirect('/');
});


app.post('/delete',(req,res)=>{
  const itemToBeDeleted = req.body.itemId;
  console.log(itemToBeDeleted);
  Item.deleteOne({_id : itemToBeDeleted},(err)=>{
    res.redirect('/');
  })
})

app.get("/:customeListName", function(req,res){
  const customeListName = req.params.customeListName;
  const list = new List({
    name : customeListName,
    items : [item1,item2,item3]
  });
  
  list.save();

});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
