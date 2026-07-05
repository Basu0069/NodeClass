const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Welcome to the regex route demo!");
});


// ? Optional character
app.get(/ab?cd/, (req, res) => {
    res.send("Matched /acd or /abcd");
});

// One or more (+)
app.get(/ab+cd/, (req, res) => {
    res.send("Matched /abcd, /abbcd, /abbbcd, etc");
});

// Regular expression route starts with 'a'
app.get(/^.*a.*$/, (req, res) => {
    res.send("Matched any route containing 'a' (e.g. /apple, /cat, /data)");
});

// regex with start & end anchors
app.get(/^\/users\/[0-9]+$/, (req, res) => {
    res.send("Matched /users/ followed by numbers only, e.g. /users/123");
});

// One or more
app.get(/ab+cd/, (req, res) => {
    res.send("Matched /abcd, /abbcd, /abbbcd, etc.");
});

// zero or more (*)
app.get(/^\/ab.*cd$/, (req, res) => {
    res.send("Matched /abcd, /abxd, /abSOMEthingcd");
});

// Optional group (())
app.get(/ab(cd)?e/, (req, res) => {
    res.send("Matched /abe or /abcde");
});

// regular expression route start with a
app.get(/^.*a.*$/, (req, res) => {
    res.send("Matched any route containing 'a' (like /apple or /ant)");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
