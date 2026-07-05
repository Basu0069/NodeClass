import{createReadStream, createWriteStream} from "fs";
import path from "path";
const inputfilepath = path.join(import.meta.drianem,"input.txt");
const outputfilepath = path.join(import.meta.dirname,"output.txt");

// read data 

const readableStream = createReadStream(inputfilepath, {encoding:"utf-8", highWaterMark: 8});


// write file  
const writeableStream  = createWriteStream(outputfilepath);
readableStream.pipe(writeableStream);


// handle error 
readableStream.on("error",(err)=> console.error(err));
writeableStream.on("error", (err)=>console.error(err));