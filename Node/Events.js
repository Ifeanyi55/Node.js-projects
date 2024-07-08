const { createServer } = require("node:http");
const fs  = require("node:fs");

const hostname = "127.0.0.1";
const port = 4000;

const rs = fs.createReadStream("./sayWhatsUp.txt");

rs.on("open",function () {
    console.log("The file is open");
})

