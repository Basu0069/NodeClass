// Task 
// Create a program using Node.js event emitter that:
// 1. Listens for multiple types of user events 
// 2. Tracks how many times each event is emitted 
// 3. Logs a summary of all event occurrences when a special sumamary event is triggered 

// Requirement 
// 1.Create atleast 4 custom events(user-NavigatorLogin, user-logout user- purchase, profileupdate)
// 2.Emit these events multiple times with different arguments 
// 3.Track and store the count of each type event type 
// 4.Define a summary event that logs a detailed report of how many times each event triggered 


const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventCount = {
    "user-login": 0,
    "user-purchase": 0,
    "profile-updated": 0,
    "user-logout": 0,
};

// Event Listeners
emitter.on("user-login", (username) => {
    eventCount["user-login"]++;

    console.log(`${username} logged in!`);
});

emitter.on("user-purchase", (username, item) => {
    eventCount["user-purchase"]++;
    console.log(`${username} purchased ${item}`);
});

emitter.on("profile-updated", (username, field) => {
    eventCount["profile-updated"]++;
    console.log(`${username} updated ${field}`);
});

emitter.on("user-logout", (username) => {
    eventCount["user-logout"]++;
    console.log(`${username} logged out!`);
});

// Summary Event
emitter.on("summary", () => {
    console.table(eventCount);
});

// Emit Events
emitter.emit("user-login", "Basu");
emitter.emit("user-purchase", "Basu", "car");
emitter.emit("profile-updated", "Basu", "email");
emitter.emit("user-logout", "Basu");
emitter.emit("summary");
