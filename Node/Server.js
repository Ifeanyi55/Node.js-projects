const { createServer } = require("node:http");
const { dateTime } = require("./dateTime");

const hostname = "127.0.0.1";
const port = 4000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html"); // display a plain text or html
    res.write("Hello World, " + "today is " + dateTime()); // write the response
    res.end(); // end the response
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});