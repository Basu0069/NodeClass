const fs = require("fs");
const fileName = "abc.txt";
const path = require("path");
const filePath = path.join(__dirname, fileName);





// write file 
const writeFile = fs.writeFileSync(filePath, "this is the first sync life");
console.log(writeFile);





// read file 
const readFile = fs.readFileSync(filePath, "utf-8");
console.log(readFile); // already string because of "utf-8"




// another method 
const readBuffer = fs.readFileSync(filePath);
console.log(readBuffer.toString()); // converting buffer to string manually




// update file -- append 
const appendFile = fs.appendFileSync(filePath, "\nhello world");
console.log(appendFile);


// rename file 
const newfileName = "abcd.txt";
const renameFile = fs.renameSync(filePath, newfileName);
console.log(renameFile);


// delete file-- unlink  
const deleteFile = fs.unlinkSync(newfileName);
console.log(deleteFile);
