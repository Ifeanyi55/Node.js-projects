const { createServer } = require("node:http");
const fs  = require("node:fs");
const url = require("node:url");

const hostname = "127.0.0.1";
const port = 4000;

const server = createServer((req, res) => {
    const query = url.parse(req.url,true);
    const filename = "." + query.pathname;
    fs.readFile(filename, function(err, data) { // read file
        if(err){
            res.writeHead(404,{"Content-Type":"text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        return res.end();
})});

server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
});