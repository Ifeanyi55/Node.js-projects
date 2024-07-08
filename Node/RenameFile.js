const { createServer } = require("node:http");
const fs  = require("node:fs");

const hostname = "127.0.0.1";
const port = 4000;

const server = createServer((req, res) => {
    fs.rename("sayGreeting.txt","sayWhatsUp.txt",function(err) { // 
        if (err) throw err;
        console.log("File renamed!");
})});

server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
});

// To rename a file with the File System module,  use the fs.rename() method.