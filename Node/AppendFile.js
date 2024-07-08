const { createServer } = require("node:http");
const fs  = require("node:fs");

const hostname = "127.0.0.1";
const port = 4000;

const server = createServer((req, res) => {
    fs.appendFile("sayHello.txt","Hello Ifeanyi!", function(err) { // append file
        if (err) throw err;
        console.log('Saved!');
})});

server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
});

// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created