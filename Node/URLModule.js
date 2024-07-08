const url = require("node:url");
const address = "http://localhost:4000/default.htm?year=2024&month=july";

const query = url.parse(address,true);

console.log(query.host); //returns "localhost:4000"
console.log(query.pathname); //returns "/default.htm"
console.log(query.search); //returns "?year=2017&month=february"

const query_data = query.query;

console.log(query_data); //returns an object: { year: 2024, month: "july" }

console.log(query_data.month); //return "july"

// The URL module splits up a web address into readable parts.