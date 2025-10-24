
const { appendFile } = require("fs");
const fs = require("fs/promises");
const path = require("path");

const filename = "asyncwait1.txt";
const filepath = path.join(__dirname, filename);

// Write file using async/await
const writeFile= async () => {
  try {
    await fs.writeFile(filepath, "this is fs promises async/await method", "utf-8");
    console.log("File created successfully!");
  } catch (error) {
    console.error(" Error:", error);
  }
};

writeFile();





// Read File 
const readfile = async() => {
    try{
        const data = await fs.readFile(filepath, "utf-8")
        console.log("content ",data)
    }catch(error){
        console.error(error);
    }
}
readfile();



// Append 

const AppendFile = async() => {
    try{
        await fs.appendFile(filepath, "\n this is my updated file now", "utf-8")
        console.log("files updated");
    }catch(error){
        console.error(error);
    }
}
AppendFile();



// Delete 
const DeleteFile = async() => {
    try{
        await fs.unlink(filepath) // or you can specify the filename directly asyncwait1.txt 
        console.log("files deleted");
    }catch(error){
        console.error(error);
    }
}
DeleteFile();

