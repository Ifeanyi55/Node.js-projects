const { createServer } = require("node:http");
const fs  = require("node:fs");

const hostname = "127.0.0.1";
const port = 4000;

const server = createServer((req, res) => {
    fs.writeFile("sayHowdy.txt","Hi, Node.js! Great to meet you!", function(err) { 
        if (err) throw err;
        console.log('Saved!');
})});

server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
});

// TThe fs.writeFile() method replaces the specified file and content if it exists. 
// If the file does not exist, a new file, containing the specified content, will be created: