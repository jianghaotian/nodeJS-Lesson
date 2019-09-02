const http = require("http");

var server = http.createServer(function(req, res) {
    res.write("hello world!");
    res.end();
});

server.listen(5000);
console.log("server is listening 5000")

