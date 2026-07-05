var util = require("util");
var str = `my name is %s and id is %d. `;
var frmtstr = util.format(str, `Sukhwinder`, 31896);
console.log(frmtstr);

// TO log a message with timestamp and print it to the console 
// util.log(`virus detected`)

// The util module function 
var util = require(`util`);
// console.log(util.isArray([])); // this is an old method and we dont use this method anymore 
console.log(Array.isArray([]));



// console.log(util.isArray({price: 0 }));
console.log(Array.isArray({price:0}))


// console.log(util.isDate(new Date()));
console.log((new Date()) instanceof Date) 

// console.log(util.isDate({"":""}));
console.log(({"":""}) instanceof Date)

// console.log(util.isError(new Error("Error occurred")));
console.log((new Error ("Error occured")) instanceof Error)


// console.log(util.isError({errmsg: "Error occured"}));
console.log(({errmsg: "error occurred"})instanceof Error)


// console.log(util.isRegExp(/regexp1/));
console.log((/reqexp1/)instanceof RegExp);

// console.log(util.isRefExp(new RegExp(`my regexp`)));
console.log(new RegExp(`(my regexp/)` )instanceof RegExp)


