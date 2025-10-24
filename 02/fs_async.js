//  Async method interacting with 


const fs = require("fs");
const path = require("path");
const fileName= "aysnc.txt";
// create file ---- write function 
const filePath = path.join(__dirname, fileName)
fs.writeFile(filePath,"this is async file ", "utf-8", (err) => {
    if(err) console.error(err)
        else console.log("file has been created");
})


// read file 

fs.readFile(filePath, "utf-8" , (err,data) => {
    if(err) console.error(err)
        else console.log(data); 
})


// Update the file 
fs.appendFile(filePath,"\n this is an updated file ", "utf-8", (err) => {
    if(err) console.error(err)
        else console.log("file has been updated okay");
})

// delete file 
fs.unlink(filePath, (err) => {
    if(err)console.error(err)
        else console.log("file deleted successfully ")
})



