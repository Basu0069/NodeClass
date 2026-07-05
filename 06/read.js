// Reading json from a file 
const fs= require('fs'); 

fs.readFile('data.json','utf8',(err,data) => {
    if(err){
        console.error(err);
        return;
    }
    const parsedData = JSON.parse(data);
    console.log(parsedData);
})

