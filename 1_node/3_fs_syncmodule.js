const {readFileSync, writeFileSync} = require("fs");

console.log("Start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");


writeFileSync("./content/result-sync.txt", `Heres the result: ${first}, ${second}`, {flag: "a"});

console.log("Done with this taks");
console.log("Starting the next one");