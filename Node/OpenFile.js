const { createServer } = require("node:http");
const fs  = require("node:fs");

const hostname = "127.0.0.1";
const port = 4000;

const server = createServer((req, res) => {
    fs.open("sayGreeting.txt","w", function(err,file) { 
        if (err) throw err;
        console.log('Saved!');
})});

server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
});

// The fs.open() method takes a "flag" as the second argument.
// If the flag is "w" for "writing", the specified file is opened for writing. 
// If the file does not exist, an empty file is created: