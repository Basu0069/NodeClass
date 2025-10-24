// BUilt in modules 
// 1)path module 
// 2)cs 
// 3)es 



// Path Module features :
// Path.parse();
// Path.join()
// Path.resolve();
// Path.extname();
// Path.basename();
// Path.dirname();
// Path.sep 
const path = require("path");
console.log(__filename);

// path features -- student information 
const filePath = path.join("folder", "students","data.txt");
console.log(filePath);

const paresdate= path.parse(filePath);
const resolvePath= path.resolve(filePath);
const extname = path.extname(filePath);
const basename =path.basename(filePath);
const dirname= path.dirname(filePath);
console.log({paresdate});
console.log({resolvePath});
console.log({extname});
console.log({basename});
console.log({dirname});
























