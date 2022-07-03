//mongodb+srv://mitul:<password>@cluster0.uhuivz6.mongodb.net/?retryWrites=true&w=majority

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mitul:mitul5pro@cluster0.uhuivz6.mongodb.net/?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
},(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('connected successfully');
    }
});

const kittySchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, "Why does you cat dont have name"]
    },
    age: {
        type : Number,
        min : 1,
        max : 50
    }
  });

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({name: 'Silence' , age : 1});

const fluffy = new Kitten({ name: 'fluffy' , age : 3});

const tom = new Kitten({name : 'Tom', age :40 });

const yom = new Kitten({name : 'Yom', age : 21});

const merry = new Kitten({name : 'Marry', age : 11});

const larry = new Kitten({name : 'Larry', age : 3});

const natti = new Kitten({name : 'Natti', age : 6});

const vetty = new Kitten({name : 'Vetty', age : 30});

// Kitten.insertMany([natti, vetty], (err)=>{
//     if(err){
//         console.log(err); 
//     }else{
//         console.log('successfully saved to Database');
//     }
// });

// Kitten.deleteOne({name : 'fluffy'},(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Removed successfully');
//     }
// });

// Kitten.updateOne({name : 'Yom'}, {name : 'Peach'}, (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('successfully updated');
//     }
// });


// Kitten.find((err,doc)=>{
//     if(err){
//         console.log(err);
//     }else{
//         mongoose.connection.close();
//         doc.forEach((k)=>{
//             console.log(k.name);
//         })
//     }
// });

const personSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    age : Number,
    gender : {
        type : String,
        enum : ['Male','Female'],
        require : true
    },
    category : {
        type : String,
        default : 'General',
        enum : ['General', 'SC', 'ST', 'OBC']
    } 
});

const Person = mongoose.model('Person', personSchema);

const mitul = new Person({
    name : 'Mitul',
    age : 21,
    gender : 'Male',
    category : 'SC'
});

const mansi = new Person({
    name : 'Mansi',
    age : 18,
    gender : 'Female',
    category : 'SC'
});
// mansi.save();    

// Person.insertMany([mitul,mansi],(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('successfully inserted');
//     }
// });

// Person.updateOne({name : 'Mitul'}, {age : 20},(err)=>{
//     if(err)
//     console.log('567890987654'+err);
//     else
//     console.log('updated successfully');
// });

Person.deleteMany({name : 'Mansi'},(err)=>{
    if(err)
    console.log(err);
    else
    console.log('deleted');
});


Person.find((err,doc)=>{
    mongoose.connection.close();
    if(err)
    console.log(err);
    else
    console.log(doc);
});