const { createServer } = require("node:http");
const fs  = require("node:fs");

const hostname = "127.0.0.1";
const port = 4000;

const server = createServer((req, res) => {
    fs.unlink("sayHowdy.txt", function(err) { // append file
        if (err) throw err;
        console.log("File deleted!");
})});

server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
});

// To delete a file with the File System module,  use the fs.unlink() method.