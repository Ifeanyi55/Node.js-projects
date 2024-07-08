import { createServer } from "node:http";
import { upperCase } from "upper-case";

const hostname = "127.0.0.1";
const port = 4000;

const server = createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(upperCase("Hello Node.js!"));
    res.end();
});

server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
});

// Create a Node.js file that will convert the output "Hello World!" into upper-case letters using the upper-case package
// use the "import" statement to import modules, and use the ".mjs" extension for the file