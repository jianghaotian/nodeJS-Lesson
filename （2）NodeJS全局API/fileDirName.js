const http = require("http");
const path = require("path");
const fs = require("fs");

var server = http.createServer(function(req, res) {
    var viewPath = path.join(__dirname, "/views/view.html");
    console.log(viewPath);
    var viewContent = fs.readFileSync(viewPath);
    viewContent = viewContent.toString("utf8");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(viewContent);
    res.end();
});

server.listen(8080);
console.log("server is listening 8080")
