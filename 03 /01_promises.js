const fs = require("fs");
// another method to avoid wrting the promises  everytime 
// const fs = require("fs\promises");
const path = require("path");
const fileName= "promises.txt";
const filepath = path.join(__dirname, fileName);
console.log(filepath);
// create file 

fs.promises.writeFile(filepath, "this is fs promises file using then and catch method", "utf-8")
.then(console.log("file created successfully"))
.catch((err) => console.error(err))



// read file 
fs.promises.readFile(filepath, "utf-8");
.then((data)=>console.log(data))
.catch((err)=> console.error(err));
// whyy



// updated file 
fs.promises.appendFile(filepath, "hello world ", "utf-8")
.then(console.log("file updated suceessfully"))
.catch((err)=> console.error(err));


// delete file 

fs.promises.unlink(filePath)
.then(console.log("file deleted"));
.catch((err)=> console.error(err));




// 




