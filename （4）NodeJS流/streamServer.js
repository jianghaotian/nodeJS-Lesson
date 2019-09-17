const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
    var filePath = path.join(__dirname, "/data.txt");
    var streamReadr = fs.createReadStream(filePath);
    streamReadr.pipe(res);
    
}).listen(8081);
console.log("listen 8081")
