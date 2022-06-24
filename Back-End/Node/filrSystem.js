const fs = require('fs');

fs.writeFile(__dirname+'/test.txt',"This is my new file ",(err)=>{
    if(err){
        console.log('Error ');
    }else{
        console.log('Successfully writen in file');
    }
});

fs.readFile(__dirname+'/test.txt','utf8',(err,data)=>{
    if(err){
        console.log('err in reading ');
    }else {
        console.log(data);
    }
});

console.log('Finished');