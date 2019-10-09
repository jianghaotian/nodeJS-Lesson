const fs = require("fs");

var str = fs.readFileSync("./333.json");

var str1 = JSON.parse(str);

console.log(str1[0]["username"]);


