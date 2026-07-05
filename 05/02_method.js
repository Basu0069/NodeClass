// duplex methodd 
const fs = require("fs");
const path = require("path");

const filename = "tst1.txt";
const filepath = path.join(__dirname, filename);

// read data 
const readableStream = fs.createReadStream(filepath, { encoding: "utf-8", highWaterMark: 16 });

// write file 
const writeableStream = fs.createWriteStream("output.txt");
readableStream.pipe(writeableStream);

// handle error 
readableStream.on("error", (err) => console.error(err));
writeableStream.on("error", (err) => console.error(err));
