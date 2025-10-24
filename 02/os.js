// const os = require('os');

// console.log("OS Platform: ", os.platform());
// console.log("OS Type: ", os.type());
// console.log("OS Release Version:", os.release());
// console.log("OS Architecture:", os.arch());
// console.log("OS Temporary Directory:", os.tmpdir());
// console.log("OS Free Memory:", os.freemem());
// console.log("OS Total Memory:", os.totalmem());
// console.log("OS Hostname:", os.hostname());
// console.log("OS Uptime (in seconds):", os.uptime());


// user information 
const os = require('os');

const user = os.userInfo();

console.log("User Information:");
console.log(`User Name: ${user.username}`);
console.log(`User ID: ${user.uid}`);
console.log(`Group ID: ${user.gid}`);
console.log(`Home Directory: ${user.homedir}`);
